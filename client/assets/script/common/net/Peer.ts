export default class Peer extends cc.EventTarget {
    private static ID_INC: number = 0;
    private socket: WebSocket = null;
    private id: number = 0;

    public connect(url: string) {
        this.socket = new WebSocket(url);
        this.id = ++Peer.ID_INC;        

        this.socket.onclose = this.onclose;
        this.socket.onerror = this.onerror;
        this.socket.onmessage = this.onmessage;
        this.socket.onopen = this.onopen;        
    }

    public close() {
        this.socket.close(1000)
    }

    public getID(): number {
        return this.id;
    }

    private onclose(ev: CloseEvent) {
        console.log('onclose', ev)
    }

    private onerror(ev: Event) {
        console.log('onerror', ev)
    }

    private onmessage(ev: MessageEvent) {
        console.log('onmessage', ev)
    }

    private onopen(ev: Event) {
        console.log('onopen', ev)
    }
}
