package gate

import (
	"server/game"
	"server/login"
	"server/msg"
	"server/msg/proto"
)

func init() {
	msg.Processor.SetRouter(&proto.C2S_Register{}, game.ChanRPC)
	msg.Processor.SetRouter(&proto.C2S_Logout{}, game.ChanRPC)
	msg.Processor.SetRouter(&proto.C2S_CreateRoom{}, game.ChanRPC)
	msg.Processor.SetRouter(&proto.C2S_EnterRoom{}, game.ChanRPC)
	msg.Processor.SetRouter(&proto.C2S_LeaveRoom{}, game.ChanRPC)
	msg.Processor.SetRouter(&proto.C2S_Speak{}, game.ChanRPC)
	msg.Processor.SetRouter(&proto.C2S_Ready{}, game.ChanRPC)
	msg.Processor.SetRouter(&proto.C2S_RoomList{}, game.ChanRPC)

	msg.Processor.SetRouter(&proto.C2S_Login{}, login.ChanRPC)
	msg.Processor.SetRouter(&proto.C2S_Test{}, login.ChanRPC)
}
