import { URI } from "../cfg/cfg_global";
import MsgCenter from "../common/net/MsgCenter";
import { G } from "../Global";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Login extends cc.Component {

    @property(cc.EditBox)
    userID: cc.EditBox = null;

    onBtnLogin() {
        let id = this.userID.string;
        MsgCenter.Ins.connect(`ws://${G.GAME_SERVER_ADDR}:${G.GAME_SERVER_PORT}/${URI.LOGIN}?id=${id}`);
    }
}
