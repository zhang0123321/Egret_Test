class FloorConfigManager 
{
	private static _instance:FloorConfigManager;
	public static get instance():FloorConfigManager
	{
		if( this._instance == null )
		{
			this._instance = new FloorConfigManager();
		}
		return this._instance;
	}

	private buyArr:FloorConfig[];
	public constructor() 
	{
		this.buyArr = [];
	}

	public init():void{

		let str: string = RES.getRes( "floor_config_txt" );
		let jsonData: any = JSON.parse(str);
		let dataArr: any[] = jsonData.data;

		for (let i: number = 0; i < dataArr.length; ++i) 
		{
			let model: FloorConfig = new FloorConfig();
			let isSucess: boolean = model.init(dataArr[i]);
			if (isSucess == false) 
			{
				LogUtil.error("floor_config初始化失败");
				return;
			}
			
			this.buyArr.push(model);
			
		}
	}
	/**获得数据 */
	public getbuyArr():FloorConfig[]
	{
		return this.buyArr;
	}
}