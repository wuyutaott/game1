export default class Global {
    private constructor() {}
    private static instance: Global = null;
    public static get Ins(): Global {
        if (!Global.instance) {
            Global.instance = new Global();
        }
        return Global.instance;
    } 

    GAME_SERVER_ADDR = '127.0.0.1';                 // 游戏服务器地址
    GAME_SERVER_PORT = 8080;                        // 游戏服务器端口
}

export let G = Global.Ins;