package msg

import (
	"github.com/name5566/leaf/network/protobuf"
	"server/msg/proto"
)

var Processor = protobuf.NewProcessor()

func init() {
	// Account
	Processor.Register(&proto.C2S_Login{})
	Processor.Register(&proto.S2C_Login{})
	Processor.Register(&proto.C2S_Register{})
	Processor.Register(&proto.S2C_Register{})
	Processor.Register(&proto.C2S_Logout{})
	Processor.Register(&proto.S2C_Logout{})
	Processor.Register(&proto.S2C_KickOutLobby{})

	// Room
	Processor.Register(&proto.C2S_CreateRoom{})
	Processor.Register(&proto.S2C_CreateRoom{})
	Processor.Register(&proto.C2S_EnterRoom{})
	Processor.Register(&proto.S2C_EnterRoom{})
	Processor.Register(&proto.C2S_LeaveRoom{})
	Processor.Register(&proto.S2C_LeaveRoom{})
	Processor.Register(&proto.C2S_Speak{})
	Processor.Register(&proto.S2C_Speak{})
	Processor.Register(&proto.S2C_KickOutRoom{})
	Processor.Register(&proto.C2S_RoomList{})
	Processor.Register(&proto.S2C_RoomList{})

	// Game
	Processor.Register(&proto.C2S_Ready{})
	Processor.Register(&proto.S2C_Ready{})

	// Test
	Processor.Register(&proto.C2S_Test{})
	Processor.Register(&proto.S2C_Test{})
}
