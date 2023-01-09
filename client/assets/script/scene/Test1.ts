import { URI } from "../cfg/cfg_global";
import { cmd } from "../cmd/opcode";
import { proto } from "../cmd/proto";
import MsgCenter from "../common/net/MsgCenter";
import { G } from "../Global";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Test1 extends cc.Component {

    protected onLoad(): void {
        MsgCenter.Ins.on(cmd.S2C_Test, this.S2C_Test, this);
    }

    onBtnConnect() {
        MsgCenter.Ins.connect(`ws://${G.GAME_SERVER_ADDR}:${G.GAME_SERVER_PORT}/${URI.LOGIN}`);
    }

    onBtnClose() {
        MsgCenter.Ins.close();
    }

    onBtnTest() {
        let msg = new proto.C2S_Test;
        MsgCenter.Ins.send(msg);
    }

    S2C_Test(msg: proto.S2C_Test) {
        console.log(msg.id1);
        console.log(msg.id2);
    }
}
