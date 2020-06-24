class LogUtil {

	public static SHOWDEBUG: boolean = true;

	public static log(desc: any): void {
		if (this.SHOWDEBUG) {
			egret.log(desc);
		}
	}

	public static warn(desc: any): void {
		if (this.SHOWDEBUG) {
			egret.warn(desc);
		}
	}

	public static error(desc: any): void {
		if (this.SHOWDEBUG) {
			egret.error(desc);
		}
	}

	public static logProto(title: string, ...args: any[]): void {
		if (this.SHOWDEBUG) {
			LogUtil.log.apply(egret, [title].concat(args));
		}

	}
}