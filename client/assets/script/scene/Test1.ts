import MsgCenter from "../common/net/MsgCenter";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Test1 extends cc.Component {

    onBtnConnect() {
        MsgCenter.getInstance().connect('ws://127.0.0.1:8080/login/client');
    }

    onBtnClose() {
        MsgCenter.getInstance().close();
    }
}
