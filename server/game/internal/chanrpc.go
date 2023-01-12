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
	log.Debug("rpcNewAgent")
	a := args[0].(gate.Agent)
	_ = a
}

func rpcCloseAgent(args []interface{}) {
	log.Debug("rpcCloseAgent")
	a := args[0].(gate.Agent)

	player := PlayerMgr.DelPlayerByAgent(a)
	if player != nil {
		player.OnLogout()
	}
}

func rpcLoginSuccess(args []interface{}) {
	log.Debug("rpcLoginSuccess")

	agent := args[0].(gate.Agent)
	userdata := agent.UserData()
	if nil == userdata {
		return
	}
	user := userdata.(*base.User)

	// 判断玩家重复登录
	old := PlayerMgr.Get(user.ID)
	if nil != old {
		log.Debug("踢出玩家")
		old.Send(&proto.S2C_KickOutLobby{})
		old.agent.Close()
	}

	player := CreatePlayer()
	player.ID = user.ID
	player.Name = user.Name
	player.Pwd = user.Pwd
	player.agent = agent
	player.OnLogin()

	PlayerMgr.AddPlayer(player)

	player.Send(&proto.S2C_Login{
		Error: proto.ErrorCode_ok,
		PlayerInfo: &proto.PlayerInfo{
			Id:   player.ID,
			Name: player.Name,
		},
	})
}
