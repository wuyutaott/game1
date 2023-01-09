import { cmd } from "../cmd/opcode";
import { proto } from "../cmd/proto";
import MsgCenter from "../common/net/MsgCenter";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Test1 extends cc.Component {

    protected onLoad(): void {
        MsgCenter.getInstance().on(cmd.S2C_Test, this.S2C_Test, this);
    }

    onBtnConnect() {
        MsgCenter.getInstance().connect('ws://127.0.0.1:3653/login/client');
    }

    onBtnClose() {
        MsgCenter.getInstance().close();
    }

    onBtnTest() {
        let msg = new proto.C2S_Test;
        MsgCenter.getInstance().send(msg);        
    }

    S2C_Test(msg: proto.S2C_Test) {
        console.log(msg.id1);
        console.log(msg.id2);
    }
}
