import { URI } from "../cfg/cfg_global";
import { proto } from "../cmd/proto";
import MsgCenter from "../common/net/MsgCenter";
import { G } from "../Global";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Login extends cc.Component {

    @property(cc.EditBox)
    userID: cc.EditBox = null;

    onLoad() {
        MsgCenter.Ins.connect(`ws://${G.GAME_SERVER_ADDR}:${G.GAME_SERVER_PORT}/${URI.LOGIN}`);
    }

    onBtnLogin() {        
        let msg = new proto.C2S_Login({
            account: this.userID.string,
            pwd: '123456'
        })
        MsgCenter.Ins.send(msg);        
    }
}
