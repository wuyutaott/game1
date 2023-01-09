export default class Tools {
    /**
     * 浅拷贝
     */
    static shallowCopy<T>(obj: T): T {
        let newObj = {} as T;
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = obj[key];
            }
        }
        return newObj;
    }
}