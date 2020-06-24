class LanguageUtil 
{
	private static _instance:LanguageUtil;

	public static get instance():LanguageUtil
	{
		if( this._instance == null )
		{
			this._instance = new LanguageUtil();
		}
		return this._instance;
	}
	
	private lanHash:HashMap;

	public constructor() 
	{

		this.lanHash = new HashMap();
		let str:string = RES.getRes( "Language_txt" );

		let data:any = JSON.parse( str );

		let arr:any[] = data.data;

		for( let i:number = 0 ; i < arr.length ; ++i )
		{
			this.lanHash.put( arr[i][0] , arr[i][1] );
		}
	}

	public getLan( key:number )
	{
		return this.lanHash.get( key );
	}
}