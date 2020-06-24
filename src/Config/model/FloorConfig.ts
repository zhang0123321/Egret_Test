class FloorConfig extends BaseConfigModel
{

	public id:number = 0;
	public floor_id:number = 0;
	public name:string = "";
	public coust:string = "";


	public constructor() 
	{
		super();
		this.fieldArr = [ "id" , "floor_id" , "name" , "coust" ];
	}
}