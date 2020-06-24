class UpgradeConfig extends BaseConfigModel
{

	public id:number = 0;
	public storey_id:number = 0;
	public lv:number = 0;
	public produce:string = "0";
	public time:number = 0;
	public upgrade_consume:string = "0";


	public constructor() 
	{
		super();
		this.fieldArr = [ "id" , "storey_id" , "lv" , "produce" , "time" , "upgrade_consume"];
	}
}