package internal

import (
	"errors"
	"github.com/wuyutaott/leaf/gate"
	"github.com/wuyutaott/leaf/log"
	"gorm.io/gorm"
	"reflect"
	"server/base"
	"server/game"
	"server/msg/proto"
)

func init() {
	handler(&proto.C2S_Login{}, C2S_Login)
}

func handler(m interface{}, h interface{}) {
	skeleton.RegisterChanRPC(reflect.TypeOf(m), h)
}

func C2S_Login(args []interface{}) {
	req := args[0].(*proto.C2S_Login)
	agent := args[1].(gate.Agent)

	// 根据账号信息查询数据库
	user := base.User{}
	if err := mysql.DB.Where("name = ?", req.Account).First(&user).Error; errors.Is(err, gorm.ErrRecordNotFound) {
		user.Name = req.Account
		user.Pwd = req.Pwd
		result := mysql.DB.Create(&user)
		if result.Error != nil {
			log.Debug("玩家不存在，创建失败！%+v", user)
		}
		log.Debug("玩家不存在，创建成功！%+v", user)
	} else {
		log.Debug("玩家存在！%+v", user)
	}

	if user.Pwd != req.Pwd {
		agent.WriteMsg(&proto.S2C_Login{
			Error: proto.ErrorCode_login_pwd_error,
		})
		return
	}

	agent.SetUserData(&user)

	skeleton.AsynCall(game.ChanRPC, "LoginSuccess", agent, func(err error) {
		if nil != err {
			log.Error("login failed:", user.ID, " ", err.Error())
			agent.WriteMsg(&proto.S2C_Login{
				Error: proto.ErrorCode_internal,
			})
			return
		}
	})
}
