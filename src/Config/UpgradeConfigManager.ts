class UpgradeConfigManager 
{
	private static _instance:UpgradeConfigManager;
	public static get instance():UpgradeConfigManager
	{
		if( this._instance == null )
		{
			this._instance = new UpgradeConfigManager();
		}
		return this._instance;
	}

	private buyArr:UpgradeConfig[];
	public constructor() 
	{
		this.buyArr = [];
	}

	public init():void{

		let str: string = RES.getRes( "upgrade_config_txt");
		let jsonData: any = JSON.parse(str);
		let dataArr: any[] = jsonData.data;

		for (let i: number = 0; i < dataArr.length; ++i) 
		{
			let model: UpgradeConfig = new UpgradeConfig();
			let isSucess: boolean = model.init(dataArr[i]);
			if (isSucess == false) 
			{
				LogUtil.error("upgrade_config初始化失败");
				return;
			}
			//egret.log(model);
			this.buyArr.push(model);
		}
	}
	/**获得数据 */
	public getUpgradeConfigManager():UpgradeConfig[]
	{

		return this.buyArr;
		
	}
}

