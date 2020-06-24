class HireConfig extends BaseConfigModel
{
	public id:number = 0;
	public name:string = "";
	public cat_count:string = "";
	public skil_id:number = 0;
	public floor_id:number = 0;

	public constructor() 
	{
		super();
		this.fieldArr = [ "id" , "name" , "cat_count" , "skil_id" , "floor_id"];
	}
}