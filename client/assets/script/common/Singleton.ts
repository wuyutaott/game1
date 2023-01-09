export default class Singleton {
    private constructor() {}
    private static instance: Singleton = null;
    public static get Ins(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }  
}