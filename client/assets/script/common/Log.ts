import DateHelper from "./DateHelper";

/**
 * 日志
 */
export default class Log {
	private static _isOpen = true;

	/** 是否打印日志 */
	public static set isOpen(v: boolean) {
		this._isOpen = v;
	}

	public static get isOpen(): boolean {
		return this._isOpen;
	}

	static d(obj: any, ...optionalParams: Array<any>): void {
		if (Log._isOpen == false) return;
		console.log(obj, ...optionalParams, `${DateHelper.format(new Date(), 'MM-dd hh:mm:ss:S')}`);
	}

	static i(obj: any, ...optionalParams: Array<any>): void {
		if (Log._isOpen == false) return;
		console.log(obj, ...optionalParams, `${DateHelper.format(new Date(), 'MM-dd hh:mm:ss:S')}`);
	}

	static w(obj: any, ...optionalParams: Array<any>): void {
		if (Log._isOpen == false) return;
		console.warn(obj, ...optionalParams, `${DateHelper.format(new Date(), 'MM-dd hh:mm:ss:S')}`);
	}

	static e(obj: any, ...optionalParams: Array<any>): void {
		console.error(obj, ...optionalParams, `${DateHelper.format(new Date(), 'MM-dd hh:mm:ss:S')}`);
	}
}