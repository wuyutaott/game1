
import {proto} from "./proto"
		
export class ProtoMapItem {
	opcode: number;
	msg: any;
	isprint: boolean;
	logMsg: string;
}

export var protoMap: {[key:number]: ProtoMapItem} = {
	[0]: {opcode: 0, msg: proto.C2S_Login, isprint: false, logMsg: "proto.C2S_Login"},
	[1]: {opcode: 0, msg: proto.S2C_Login, isprint: false, logMsg: "proto.S2C_Login"},
	[2]: {opcode: 0, msg: proto.C2S_Register, isprint: false, logMsg: "proto.C2S_Register"},
	[3]: {opcode: 0, msg: proto.S2C_Register, isprint: false, logMsg: "proto.S2C_Register"},
	[4]: {opcode: 0, msg: proto.C2S_Logout, isprint: false, logMsg: "proto.C2S_Logout"},
	[5]: {opcode: 0, msg: proto.S2C_Logout, isprint: false, logMsg: "proto.S2C_Logout"},
	[6]: {opcode: 0, msg: proto.S2C_KickOutLobby, isprint: false, logMsg: "proto.S2C_KickOutLobby"},
	[7]: {opcode: 0, msg: proto.C2S_CreateRoom, isprint: false, logMsg: "proto.C2S_CreateRoom"},
	[8]: {opcode: 0, msg: proto.S2C_CreateRoom, isprint: false, logMsg: "proto.S2C_CreateRoom"},
	[9]: {opcode: 0, msg: proto.C2S_EnterRoom, isprint: false, logMsg: "proto.C2S_EnterRoom"},
	[10]: {opcode: 0, msg: proto.S2C_EnterRoom, isprint: false, logMsg: "proto.S2C_EnterRoom"},
	[11]: {opcode: 0, msg: proto.C2S_LeaveRoom, isprint: false, logMsg: "proto.C2S_LeaveRoom"},
	[12]: {opcode: 0, msg: proto.S2C_LeaveRoom, isprint: false, logMsg: "proto.S2C_LeaveRoom"},
	[13]: {opcode: 0, msg: proto.C2S_Speak, isprint: false, logMsg: "proto.C2S_Speak"},
	[14]: {opcode: 0, msg: proto.S2C_Speak, isprint: false, logMsg: "proto.S2C_Speak"},
	[15]: {opcode: 0, msg: proto.S2C_KickOutRoom, isprint: false, logMsg: "proto.S2C_KickOutRoom"},
	[16]: {opcode: 0, msg: proto.C2S_RoomList, isprint: false, logMsg: "proto.C2S_RoomList"},
	[17]: {opcode: 0, msg: proto.S2C_RoomList, isprint: false, logMsg: "proto.S2C_RoomList"},
	[18]: {opcode: 0, msg: proto.C2S_Ready, isprint: false, logMsg: "proto.C2S_Ready"},
	[19]: {opcode: 0, msg: proto.S2C_Ready, isprint: false, logMsg: "proto.S2C_Ready"},
	[20]: {opcode: 0, msg: proto.C2S_Test, isprint: false, logMsg: "proto.C2S_Test"},
	[21]: {opcode: 0, msg: proto.S2C_Test, isprint: false, logMsg: "proto.S2C_Test"},

}

proto.C2S_Login.prototype["_opcode"] = 0;
proto.S2C_Login.prototype["_opcode"] = 1;
proto.C2S_Register.prototype["_opcode"] = 2;
proto.S2C_Register.prototype["_opcode"] = 3;
proto.C2S_Logout.prototype["_opcode"] = 4;
proto.S2C_Logout.prototype["_opcode"] = 5;
proto.S2C_KickOutLobby.prototype["_opcode"] = 6;
proto.C2S_CreateRoom.prototype["_opcode"] = 7;
proto.S2C_CreateRoom.prototype["_opcode"] = 8;
proto.C2S_EnterRoom.prototype["_opcode"] = 9;
proto.S2C_EnterRoom.prototype["_opcode"] = 10;
proto.C2S_LeaveRoom.prototype["_opcode"] = 11;
proto.S2C_LeaveRoom.prototype["_opcode"] = 12;
proto.C2S_Speak.prototype["_opcode"] = 13;
proto.S2C_Speak.prototype["_opcode"] = 14;
proto.S2C_KickOutRoom.prototype["_opcode"] = 15;
proto.C2S_RoomList.prototype["_opcode"] = 16;
proto.S2C_RoomList.prototype["_opcode"] = 17;
proto.C2S_Ready.prototype["_opcode"] = 18;
proto.S2C_Ready.prototype["_opcode"] = 19;
proto.C2S_Test.prototype["_opcode"] = 20;
proto.S2C_Test.prototype["_opcode"] = 21;


export const cmd = {
	C2S_Login: "0",
	S2C_Login: "1",
	C2S_Register: "2",
	S2C_Register: "3",
	C2S_Logout: "4",
	S2C_Logout: "5",
	S2C_KickOutLobby: "6",
	C2S_CreateRoom: "7",
	S2C_CreateRoom: "8",
	C2S_EnterRoom: "9",
	S2C_EnterRoom: "10",
	C2S_LeaveRoom: "11",
	S2C_LeaveRoom: "12",
	C2S_Speak: "13",
	S2C_Speak: "14",
	S2C_KickOutRoom: "15",
	C2S_RoomList: "16",
	S2C_RoomList: "17",
	C2S_Ready: "18",
	S2C_Ready: "19",
	C2S_Test: "20",
	S2C_Test: "21",

}
