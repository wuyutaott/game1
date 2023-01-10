package internal

import (
	"github.com/wuyutaott/leaf/gate"
	"github.com/wuyutaott/leaf/log"
	"server/base"
	"server/msg/proto"
)

func init() {
	skeleton.RegisterChanRPC("NewAgent", rpcNewAgent)
	skeleton.RegisterChanRPC("CloseAgent", rpcCloseAgent)
	skeleton.RegisterChanRPC("LoginSuccess", rpcLoginSuccess)
}

func rpcNewAgent(args []interface{}) {
	a := args[0].(gate.Agent)
	_ = a
	log.Debug("新客户端登录")
}

func rpcCloseAgent(args []interface{}) {
	a := args[0].(gate.Agent)
	log.Debug("客戶端断开连接")

	userdata := a.UserData()
	if nil == userdata {
		return
	}

	info := userdata.(*base.AccountInfo)
	player := PlayerMgr.Get(info.ObjID)
	if nil != player {
		player.OnLogout()
	}
	PlayerMgr.DelPlayer(info.ObjID)
}

func rpcLoginSuccess(args []interface{}) {
	log.Debug("游戏服务器处理 -> LoginSuccess")
	a := args[0].(gate.Agent)
	userdata := a.UserData()
	info := userdata.(*base.AccountInfo)

	// 判断玩家重复登录
	player := PlayerMgr.Get(info.ObjID)
	if nil != player {
		player.Send(&proto.S2C_KickOutLobby{})
		player.agent.Close()
		player.agent = a
		return
	}

	mgodb.Get(base.DBTask{info.ObjID, base.DBNAME, base.PLAYERSET, "_id", base.BsonObjectID(info.ObjID), CreatePlayer(), func(param interface{}, err error) {
		player := param.(*Player)
		player.objid = info.ObjID
		player.agent = a
		if player.Account == "" { // 保存新玩家数据
			player.InitData(info.Account)
			player.Save()
			// oss.ActionLog(player.objid, player.UID, oss.BILLID_REGISTER, nil)
		}

		player.OnLogin()
		PlayerMgr.AddPlayer(player)

		player.Send(&proto.S2C_Login{
			Error: proto.ErrorCode_ok,
			PlayerInfo: &proto.PlayerInfo{
				Id:       0,
				Nickname: "玩家昵称",
				Head:     "head://default",
				Gold:     0,
			},
		})
		// oss.ActionLog(player.objid, player.UID, oss.BILLID_LOGIN, nil)
	}})
}
