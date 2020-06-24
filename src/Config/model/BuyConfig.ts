class BuyConfig extends BaseConfigModel
{
	public id:number = 0;
	public name:string = "";
	public cat_count:string = "";
	public buy_effect:number = 0;

	public constructor() 
	{
		super();
		this.fieldArr = [ "id" , "name" , "cat_count" , "buy_effect" ];
	}
}