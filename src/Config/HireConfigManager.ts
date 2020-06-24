class HireConfigManager {
	private static _instance: HireConfigManager;
	public static get instance(): HireConfigManager {
		if (this._instance == null) {
			this._instance = new HireConfigManager();
		}
		return this._instance;
	}

	private buyArr: HireConfig[];
	public constructor() {
		this.buyArr = [];
	}

	public init(): void {

		let str: string = RES.getRes("hire_config_txt");
		let jsonData: any = JSON.parse(str);
		let dataArr: any[] = jsonData.data;

		for (let i: number = 0; i < dataArr.length; ++i) {
			let model: HireConfig = new HireConfig();
			let isSucess: boolean = model.init(dataArr[i]);
			if (isSucess == false) {
				LogUtil.error("hire_config初始化失败");
				return;
			}
			this.buyArr.push(model);

		}
	}
	/**获得数据 */
	public getHireConfigManager(): HireConfig[] {
		return this.buyArr;
	}

}