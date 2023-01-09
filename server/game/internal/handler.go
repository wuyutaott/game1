package internal

import (
	"github.com/wuyutaott/leaf/gate"
	"github.com/wuyutaott/leaf/log"
	"reflect"
	"server/msg/proto"
)

func init() {
	handler(&proto.C2S_Register{}, C2S_Register)
	handler(&proto.C2S_Logout{}, C2S_Logout)
	handler(&proto.C2S_CreateRoom{}, C2S_CreateRoom)
	handler(&proto.C2S_EnterRoom{}, C2S_EnterRoom)
	handler(&proto.C2S_LeaveRoom{}, C2S_LeaveRoom)
	handler(&proto.C2S_Speak{}, C2S_Speak)
	handler(&proto.C2S_Ready{}, C2S_Ready)
	handler(&proto.C2S_RoomList{}, C2S_RoomList)
}

func handler(m interface{}, h interface{}) {
	skeleton.RegisterChanRPC(reflect.TypeOf(m), h)
}

func C2S_Register(args []interface{}) {
	_ = args[0].(*proto.C2S_Register)
	c := args[1].(gate.Agent)

	c.WriteMsg(&proto.S2C_Register{
		Error: proto.ErrorCode_ok,
	})
}

func C2S_Logout(args []interface{}) {
	_ = args[0].(*proto.C2S_Logout)
	c := args[1].(gate.Agent)

	c.WriteMsg(&proto.S2C_Logout{})
}

func C2S_CreateRoom(args []interface{}) {
	m := args[0].(*proto.C2S_CreateRoom)
	c := args[1].(gate.Agent)

	log.Debug("%s", m)

	roomID := RoomMgr.CreateRoom()

	c.WriteMsg(&proto.S2C_CreateRoom{
		Error:  proto.ErrorCode_ok,
		RoomId: roomID,
	})
}

func C2S_EnterRoom(args []interface{}) {
	_ = args[0].(*proto.C2S_EnterRoom)
	c := args[1].(gate.Agent)

	c.WriteMsg(&proto.S2C_EnterRoom{
		Error: proto.ErrorCode_ok,
	})
}

func C2S_LeaveRoom(args []interface{}) {
	_ = args[0].(*proto.C2S_LeaveRoom)
	c := args[1].(gate.Agent)

	c.WriteMsg(&proto.S2C_LeaveRoom{
		Error: proto.ErrorCode_ok,
	})
}

func C2S_Speak(args []interface{}) {
	_ = args[0].(*proto.C2S_Speak)
	c := args[1].(gate.Agent)

	c.WriteMsg(&proto.S2C_Speak{
		Speak: "speak",
	})
}

func C2S_Ready(args []interface{}) {
	_ = args[0].(*proto.C2S_Ready)
	c := args[1].(gate.Agent)

	c.WriteMsg(&proto.S2C_Ready{
		Error: proto.ErrorCode_ok,
	})
}

func C2S_RoomList(args []interface{}) {
	_ = args[0].(*proto.C2S_RoomList)
	c := args[1].(gate.Agent)

	var roomVec []*proto.RoomInfo
	roomList := RoomMgr.GetRoomList()

	for _, room := range roomList {
		roomVec = append(roomVec, &proto.RoomInfo{Id: room.ID})
	}

	c.WriteMsg(&proto.S2C_RoomList{
		RoomInfos: roomVec,
	})
}
