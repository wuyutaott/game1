import { SCENE, URI } from "../cfg/cfg_global";
import { cmd } from "../cmd/opcode";
import { proto } from "../cmd/proto";
import MsgCenter from "../common/net/MsgCenter";
import { G } from "../Global";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Login extends cc.Component {

    @property(cc.EditBox)
    userID: cc.EditBox = null;

    @property(cc.EditBox)
    pwd: cc.EditBox = null;

    onLoad() {
        MsgCenter.Ins.connect(`ws://${G.GAME_SERVER_ADDR}:${G.GAME_SERVER_PORT}/${URI.LOGIN}`);

        MsgCenter.Ins.on(cmd.S2C_Login, this.S2C_Login, this);
    }

    onBtnLogin() {        
        let msg = new proto.C2S_Login({
            account: this.userID.string,
            pwd: this.pwd.string
        })
        MsgCenter.Ins.send(msg);        
    }

    S2C_Login(msg: proto.S2C_Login) {
        if (msg.error == proto.ErrorCode.ok) {            
            cc.director.loadScene(SCENE.LOBBY)
        }
    }
}
