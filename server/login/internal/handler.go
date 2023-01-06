package internal

import (
	"github.com/name5566/leaf/gate"
	"github.com/name5566/leaf/log"
	"gopkg.in/mgo.v2/bson"
	"reflect"
	"server/base"
	"server/game"
	"server/msg/proto"
)

func handleMsg(m interface{}, h interface{}) {
	skeleton.RegisterChanRPC(reflect.TypeOf(m), h)
}

func init() {
	handler(&proto.C2S_Login{}, C2S_Login)
}

func handler(m interface{}, h interface{}) {
	skeleton.RegisterChanRPC(reflect.TypeOf(m), h)
}

func C2S_Login(args []interface{}) {
	req := args[0].(*proto.C2S_Login)
	agent := args[1].(gate.Agent)

	mgodb.Get(base.DBTask{req.Account, base.DBNAME, base.ACCOUNTSET, "account", req.Account, &base.AccountInfo{}, func(param interface{}, err error) {
		info := param.(*base.AccountInfo)
		if info.Account == "" {
			info.Account = req.Account
			info.Password = req.Pwd
			info.ObjID = bson.NewObjectId().Hex()
			mgodb.Set(base.DBTask{info.Account, base.DBNAME, base.ACCOUNTSET, "account", req.Account, info, nil})
			log.Debug("C2S_Login -> 数据库中没找到用户信息 -> 创建一条新纪录 %s", info)
		}

		if info.Password != req.Pwd {
			agent.WriteMsg(&proto.S2C_Login{
				Error: proto.ErrorCode_login_pwd_error,
			})
			return
		}

		agent.SetUserData(info)
		skeleton.AsynCall(game.ChanRPC, "LoginSuccess", agent, func(err error) {
			if nil != err {
				log.Error("login failed:", info.ObjID, " ", err.Error())
				agent.WriteMsg(&proto.S2C_Login{
					Error: proto.ErrorCode_internal,
				})
				return
			}
		})
	}})
}
