class ColorUtil {
	
	public static getColorString( color:number):string
	{
		let color16:string = color.toString(16);
		for ( let i:number = 0 ; 6 > i ; ++i )
		{
			color16[i] || ( color16 = "0" + color16 );
		}

		return color16;
	}
}