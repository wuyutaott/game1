import ByteArray, { Endian } from "./ByteArray";

export default class Peer extends cc.EventTarget {
    public static readonly PEER_CLOSE: string = "close";
    public static readonly PEER_ERROR: string = "error";
    public static readonly PEER_RECEIVE: string = "receive";
    public static readonly PEER_CONNECT: string = "connect";

    private static ID_INC: number = 0;
    private socket: WebSocket = null;
    private id: number = 0;

    private readByte: ByteArray;
    private writeByte: ByteArray;
    private readyArray: ByteArray;
    private writeArray: ByteArray;
    private protoArray: ByteArray;

    constructor() {
        super()
        this.readByte = new ByteArray();
        this.writeByte = new ByteArray();

        this.readyArray = new ByteArray();
        this.readyArray.endian = Endian.BIG_ENDIAN;
        this.writeArray = new ByteArray();
        this.writeArray.endian = Endian.BIG_ENDIAN;
        this.protoArray = new ByteArray();
        this.protoArray.endian = Endian.BIG_ENDIAN;
    }

    public connect(url: string) {                       
        this.socket = new WebSocket(url);
        this.socket.onclose = this.onclose.bind(this);
        this.socket.onerror = this.onerror.bind(this);
        this.socket.onmessage = this.onmessage.bind(this);
        this.socket.onopen = this.onopen.bind(this);  
        this.socket.binaryType = "arraybuffer";

        this.id = ++Peer.ID_INC; 
    }

    public close() {
        this.socket.close(1000)
    }

    public getID(): number {
        return this.id;
    }

    public send(opCode: number, protobuf: Uint8Array) {
        this.writeByte.clear();
        this.writeArray.clear();
        
        this.writeArray.writeUnsignedShort(opCode);
        this.writeArray.writeUint8Array(protobuf);
        this.writeByte.writeBytes(this.writeArray);

        this.socket.send(this.writeByte.buffer);
    }

    private onclose(ev: CloseEvent) {
        console.log('onclose', ev)
    }

    private onerror(ev: Event) {
        console.log('onerror', ev)
    }

    private onmessage(ev: MessageEvent) {
        this.readByte.clear();
        this.readyArray.clear();
        this.protoArray.clear();

        let uint8Arr = new Uint8Array(ev.data);        
        this.readByte.writeUint8Array(uint8Arr);
        this.readByte.position = 0;
        this.readByte.readBytes(this.readyArray);

        let opCode = this.readyArray.readUnsignedShort();
        let length = this.readyArray.length - 2;
        this.readyArray.readBytes(this.protoArray, 0, length);

        this.emit(Peer.PEER_RECEIVE, opCode, this.protoArray.buffer);
    }

    private onopen(ev: Event) {
        console.log('onopen', ev)
    }
}
