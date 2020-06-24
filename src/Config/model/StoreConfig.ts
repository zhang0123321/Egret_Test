class StoreConfig extends BaseConfigModel
{
	public id:number = 0;
	public name:string = "";
	public diamonds_coust:string = "";
	public skil_id:number = 0;

	public constructor() 
	{
		super();
		this.fieldArr = [ "id" , "name" , "diamonds_coust" , "skil_id" ];
	}
}