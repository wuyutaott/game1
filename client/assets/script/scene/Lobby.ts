import { SCENE } from "../cfg/cfg_global";
import { cmd } from "../cmd/opcode";
import { proto } from "../cmd/proto";
import MsgCenter from "../common/net/MsgCenter";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Lobby extends cc.Component {

    onLoad() {
        MsgCenter.Ins.on(cmd.S2C_Test, this.S2C_Test, this);
        MsgCenter.Ins.on(cmd.S2C_KickOutLobby, this.S2C_KickOutLobby, this);
    }

    onBtnTest() {
        let data = new proto.C2S_Test();
        MsgCenter.Ins.send(data);
    }

    S2C_Test(msg: proto.S2C_Test) {

    }

    S2C_KickOutLobby(msg: proto.S2C_KickOutLobby) {
        console.log('您的账户在其他设备登录');
        MsgCenter.Ins.close();
        cc.director.loadScene(SCENE.LOGIN);
    }
}
