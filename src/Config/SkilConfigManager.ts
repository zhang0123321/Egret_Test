class SkilConfigManager 
{
	private static _instance:SkilConfigManager;
	public static get instance():SkilConfigManager
	{
		if( this._instance == null )
		{
			this._instance = new SkilConfigManager();
		}
		return this._instance;
	}

	private buyArr:SkilConfig[];
	public constructor() 
	{
		this.buyArr = [];
	}

	public init():void{

		if(this.buyArr.length > 0){
			return;
		}
		let str: string = RES.getRes( "skil_config_txt" );
		let jsonData: any = JSON.parse(str);
		let dataArr: any[] = jsonData.data;

		for (let i: number = 0; i < dataArr.length; ++i) 
		{
			let model: SkilConfig = new SkilConfig();
			let isSucess: boolean = model.init(dataArr[i]);
			if (isSucess == false) 
			{
				LogUtil.error("skil_config初始化失败");
				return;
			}
			this.buyArr.push(model);
			//egret.log(model);		
		}
	}
	/**获得数据 */
	public getSkilConfigManager():SkilConfig[]
	{
		return this.buyArr;
	}
}