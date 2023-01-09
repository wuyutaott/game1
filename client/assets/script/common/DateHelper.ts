/**
 * 时间的帮助类
 */
export default class DateHelper {

    static format(date: Date, fmt: string): string {
        var o = {
            "M+": date.getMonth() + 1,                      //月份 
            "d+": date.getDate(),                           //日 
            "h+": date.getHours(),                          //小时 
            "m+": date.getMinutes(),                        //分 
            "s+": date.getSeconds(),                        //秒 
            "q+": Math.floor((date.getMonth() + 3) / 3),    //季度 
            "S": date.getUTCMilliseconds()                  //毫秒 
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    }

    static formatUTC(date: Date, fmt: string): string {
        var o = {
            "M+": date.getUTCMonth() + 1,                      //月份 
            "d+": date.getUTCDate(),                           //日 
            "h+": date.getUTCHours(),                          //小时 
            "m+": date.getUTCMinutes(),                        //分 
            "s+": date.getUTCSeconds(),                        //秒 
            "q+": Math.floor((date.getUTCMonth() + 3) / 3),    //季度 
            "S": date.getUTCMilliseconds()                     //毫秒 
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getUTCFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    }

    static Date(time?: number): Date {
        if (!time)
            return new Date();
        else
            return new Date(time);
    }

    static getUTCTime(): number {
        return new Date().getTime();
    }

    static toUTCTime(date): number {
        return date.getTime();
    }
}