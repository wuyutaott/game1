export default class Peer extends cc.EventTarget {
    public static readonly PEER_CLOSE: string = "close";
    public static readonly PEER_ERROR: string = "error";
    public static readonly PEER_RECEIVE: string = "receive";
    public static readonly PEER_CONNECT: string = "connect";

    private static ID_INC: number = 0;
    private socket: WebSocket = null;
    private id: number = 0;

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
        let uint8Arr = new Uint8Array(2 + protobuf.length);
        let dataView = new DataView(uint8Arr.buffer);
        dataView.setUint16(0, opCode, false);
        uint8Arr.set(protobuf, 2);
        this.socket.send(dataView);
    }

    private onclose(ev: CloseEvent) {
        console.log('onclose', ev);
    }

    private onerror(ev: Event) {
        console.log('onerror', ev);
    }

    private onmessage(ev: MessageEvent) {
        let uint8Arr = new Uint8Array(ev.data);
        let dataView = new DataView(uint8Arr.buffer);
        let opCode = dataView.getUint16(0, false);
        let data = uint8Arr.slice(2, uint8Arr.length);
        this.emit(Peer.PEER_RECEIVE, opCode, data);
    }

    private onopen(ev: Event) {
        console.log('onopen', ev);
    }
}
