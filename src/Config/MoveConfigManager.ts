class MoveConfigManager 
{
	private static _instance:MoveConfigManager;
	public static get instance():MoveConfigManager
	{
		if( this._instance == null )
		{
			this._instance = new MoveConfigManager();
		}
		return this._instance;
	}

	private buyArr:MoveConfig[];
	public constructor() 
	{
		this.buyArr = [];
	}

	public init():void{

		let str: string = RES.getRes( "move_config_txt" );
		let jsonData: any = JSON.parse(str);
		let dataArr: any[] = jsonData.data;

		for (let i: number = 0; i < dataArr.length; ++i) 
		{
			let model: MoveConfig = new MoveConfig();
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
	public getMoveConfigManager ():MoveConfig []
	{
		return this.buyArr;
	}
}