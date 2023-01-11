package internal

import (
	"errors"
	"github.com/wuyutaott/leaf/gate"
	"github.com/wuyutaott/leaf/log"
	"gorm.io/gorm"
	"reflect"
	"server/base"
	"server/msg/proto"
)

func init() {
	handler(&proto.C2S_Login{}, C2S_Login)
	handler(&proto.C2S_Test{}, C2S_Test)
}

func handler(m interface{}, h interface{}) {
	skeleton.RegisterChanRPC(reflect.TypeOf(m), h)
}

func C2S_Login(args []interface{}) {
	req := args[0].(*proto.C2S_Login)
	agent := args[1].(gate.Agent)

	//mgodb.Get(base.DBTask{req.Account, base.DBNAME, base.ACCOUNTSET, "account", req.Account, &base.AccountInfo{}, func(param interface{}, err error) {
	//	info := param.(*base.AccountInfo)
	//	if info.Account == "" {
	//		info.Account = req.Account
	//		info.Password = req.Pwd
	//		info.ObjID = bson.NewObjectId().Hex()
	//		mgodb.Set(base.DBTask{info.Account, base.DBNAME, base.ACCOUNTSET, "account", req.Account, info, nil})
	//		log.Debug("C2S_Login -> 数据库中没找到用户信息 -> 创建一条新纪录 %s", info)
	//	}
	//
	//	if info.Password != req.Pwd {
	//		agent.WriteMsg(&proto.S2C_Login{
	//			Error: proto.ErrorCode_login_pwd_error,
	//		})
	//		return
	//	}
	//
	//	agent.SetUserData(info)
	//	skeleton.AsynCall(game.ChanRPC, "LoginSuccess", agent, func(err error) {
	//		if nil != err {
	//			log.Error("login failed:", info.ObjID, " ", err.Error())
	//			agent.WriteMsg(&proto.S2C_Login{
	//				Error: proto.ErrorCode_internal,
	//			})
	//			return
	//		}
	//	})
	//}})

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

	// 如果不存在则创建一条新记录
	// 密码判定

}

func C2S_Test(args []interface{}) {
	_ = args[0].(*proto.C2S_Test)
	agent := args[1].(gate.Agent)
	agent.WriteMsg(&proto.S2C_Test{
		Id1: 1112223334,
		Id2: 1222333444,
	})
}
