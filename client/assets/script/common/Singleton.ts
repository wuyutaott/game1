export default class Singleton {
    private constructor() {}
    private static ins: Singleton = null;
    public static getInstance() {
        if (!Singleton.ins) {
            Singleton.ins = new Singleton();
        }
        return Singleton.ins;
    }
}