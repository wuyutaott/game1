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
        
        // let uint8Arr = new Uint8Array([0, 21, 8, 230, 220, 172, 146, 4, 16, 132, 168, 237, 198, 4]); 
        // let dataView = new DataView(uint8Arr.buffer);
        // let opcode = dataView.getUint16(0, false);
        // console.log('opcode = ', opcode);
        // let obj = proto.S2C_Test.decode(uint8Arr.slice(2, uint8Arr.length));
        // console.log(obj);
    }

    S2C_Test(msg: proto.S2C_Test) {
        console.log(msg.id1);
        console.log(msg.id2);
    }
}
