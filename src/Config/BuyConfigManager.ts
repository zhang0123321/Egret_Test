class BuyConfigManager 
{
	private static _instance:BuyConfigManager;
	public static get instance():BuyConfigManager
	{
		if( this._instance == null )
		{
			this._instance = new BuyConfigManager();
		}
		return this._instance;
	}

	private buyArr:BuyConfig[];
	public constructor() 
	{
		this.buyArr = [];
	}

	public init():void{

		let str: string = RES.getRes( "buy_config_txt" );
		let jsonData: any = JSON.parse(str);
		let dataArr: any[] = jsonData.data;

		for (let i: number = 0; i < dataArr.length; ++i) 
		{
			let model: BuyConfig = new BuyConfig();
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
	public getBuyConfigManager ():BuyConfig []
	{
		return this.buyArr;
	}
}