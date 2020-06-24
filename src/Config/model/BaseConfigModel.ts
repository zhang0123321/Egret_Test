class BaseConfigModel {
	protected fieldArr: string[];
	public constructor() {
	}

	/**
	 * 
	 * return	是否成功
	 */
	public init(arr: any[]): boolean {

		if (this.fieldArr == null || this.fieldArr.length == 0) {
			LogUtil.error("BaseConfigModel--->model字段数组不合法");
			return false;
		}

		if (arr == null || arr.length == 0) {
			LogUtil.error("BaseConfigModel--->配置字段数组不合法");
			return false;
		}

		if (arr.length != this.fieldArr.length) {
			LogUtil.error("BaseConfigModel--->配置字段数组和model字段数组不符");
			return false;
		}

		for (let i: number = 0; i < this.fieldArr.length; ++i) {
			if (this.hasOwnProperty(this.fieldArr[i])) {
				this[this.fieldArr[i]] = arr[i];
			}
			else {
				LogUtil.error("BaseConfigModel--->字段不存在");
				return false;
			}
		}
		return true;
	}
}