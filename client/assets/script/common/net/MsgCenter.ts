import Peer from "./Peer";

export default class MsgCenter {
    private constructor() {}
    private static ins: MsgCenter = null;
    public static getInstance() {
        if (!MsgCenter.ins) {
            MsgCenter.ins = new MsgCenter();
        }
        return MsgCenter.ins;
    }

    perMap: Map<number, Peer> = new Map;
    curPerId: number = 0;

    public connect(url: string) {
        let peer = new Peer();
        peer.connect(url);
        let id = peer.getID();
        this.perMap.set(id, peer);
        console.log("perMap.size = ", this.perMap.size);
    }

    public close() {
        this.perMap.forEach((peer) => {
            peer.close();
        })
        this.perMap.clear();
        this.curPerId = 0;
    }
}