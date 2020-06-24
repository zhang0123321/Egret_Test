class StoreConfigManager
{
	private static _instance:StoreConfigManager;
	public static get instance():StoreConfigManager
	{
		if( this._instance == null )
		{
			this._instance = new StoreConfigManager();
		}
		return this._instance;
	}

	private buyArr:StoreConfig[];
	public constructor() 
	{
		this.buyArr = [];
	}

	public init():void{

		let str: string = RES.getRes( "store_config_txt" );
		let jsonData: any = JSON.parse(str);
		let dataArr: any[] = jsonData.data;

		for (let i: number = 0; i < dataArr.length; ++i) 
		{
			let model: StoreConfig = new StoreConfig();
			let isSucess: boolean = model.init(dataArr[i]);
			if (isSucess == false) 
			{
				LogUtil.error("config初始化失败");
				return;
			}
			this.buyArr.push(model);
		}
	}
	/**获得数据 */
	public getStoreConfigManager ():StoreConfig []
	{
		return this.buyArr;
	}
}