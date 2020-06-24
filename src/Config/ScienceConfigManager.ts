class ScienceConfigManager 
{
	private static _instance:ScienceConfigManager;
	public static get instance():ScienceConfigManager
	{
		if( this._instance == null )
		{
			this._instance = new ScienceConfigManager();
		}
		return this._instance;
	}

	private buyArr:ScienceConfig[];
	public constructor() 
	{
		this.buyArr = [];
	}

	public init():void{

		let str: string = RES.getRes( "science_config_txt");
		let jsonData: any = JSON.parse(str);
		let dataArr: any[] = jsonData.data;

		for (let i: number = 0; i < dataArr.length; ++i) 
		{
			let model: ScienceConfig = new ScienceConfig();
			let isSucess: boolean = model.init(dataArr[i]);
			if (isSucess == false) 
			{
				LogUtil.error("science_config初始化失败");
				return;
			}
			this.buyArr.push(model);
		}
	}
	/**获得数据 */
	public getScienceConfigManager():ScienceConfig[]
	{
		return this.buyArr;
	}
}

