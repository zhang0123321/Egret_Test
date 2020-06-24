class StringUtil {
	

	//StringUtil.format( "test:%s,%d" , "aaa" , 10 )
	//  test:aaa,10
	public static format( desc:string , ... params:any[] ):string
	{
		desc = desc.replace(/%%/g, "%");
		let ret:string = desc;
		for ( let items in params) {
			var n = params[ items ];
			new RegExp("(%s|%d)").test(ret) && (ret = ret.replace(RegExp.$1, n))
		}
		return ret;
	}

	//StringUtil.format2( "test:{0},{1}" , "bbb" , 20 )
	//test:bbb,20
	public static format2( desc:string , ...params:any[] ):string
	{
		if ( params.length == 0 )
		{
			return desc;
		}
		let ret = desc;
		for ( let i:number = 0; i < params.length; i++)
			ret = ret.replace(new RegExp("\\{" + i + "\\}","g"), params[i]);
		return ret;
	}


	public static setStringColor( desc:string , color:number ):string
	{
		return this.format( "<color=#%s>%s</color>", "#" + ColorUtil.getColorString( color ) , desc );
	}
}