import cfg_opcode_exclude from "../../cfg/cfg_opcode_exclude";
import { protoMap } from "../../cmd/opcode";
import Log from "../Log";
import Tools from "../Tools";
import Peer from "./Peer";

export default class MsgCenter extends cc.EventTarget {
    private constructor() { super() }
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
        this.curPerId = id;
        console.log("perMap.size = ", this.perMap.size);

        peer.on(Peer.PEER_RECEIVE, this.onReceive, this);
    }

    public close() {
        this.perMap.forEach((peer) => {
            peer.close();
        })
        this.perMap.clear();
        this.curPerId = 0;
    }

    /**
     * 发送socket命令
     * @param data proto数据
     */
    send(data: any): boolean {
        let peer = this.getPeer();
        if (!peer) {
            Log.d('send err! peer不存在');
            return;
        }
        let opCode = data["_opcode"];                
        var pb = protoMap[opCode];
        if (pb) {
            let protobuf = null;
            if (pb.msg != null) {
                protobuf = pb.msg.encode(data).finish();
            } else {
                protobuf = new Uint8Array(0);
            }

            peer.send(opCode, protobuf);
                                                    
            if (!cfg_opcode_exclude[opCode]) {
                let msg = "";
                if (data) msg = JSON.stringify(data);
                Log.d(`发->命令号${opCode}   命令名字:${pb.logMsg}  内容:${msg}`);
            }
            return true;
        } else {
            Log.d("请添加对应的PB->" + opCode);
            return false;
        }
    }

    getPeer(): Peer {        
        return this.perMap.get(this.curPerId);
    }

    /**
     * 消息接收回调
     * @param header 包头 
     * @param buffer proto数据
     */
    private onReceive(opCode: number, data: Uint8Array): void {
        let pb = protoMap[opCode];
        if (pb) {
            let call = null;
            if (pb.msg) {
                try {
                    call = pb.msg.decode(data);
                } catch (error) {
                    Log.e(`ProtoBuf解析失败，pb = ${pb.logMsg}, opCode = ${opCode}，buffer = [${data}]`);
                    return;
                }
            }                     
                                        
            if (!cfg_opcode_exclude[opCode]) {
                let str = JSON.stringify(Tools.shallowCopy(call));
                Log.d(`收->命令号${opCode}  命令名字:${pb.logMsg}  内容:${str}`);
            }
                         
            this.emit(opCode.toString(), call);            
        } else {
            Log.d(`opCode未注册->${opCode}`);
        }
    }
}