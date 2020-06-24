class MoveConfig extends BaseConfigModel
{
	public id:number = 0;
	public name:string = "";
	public move_coust:string = "";

	public constructor() 
	{
		super();
		this.fieldArr = [ "id" , "name" , "move_coust"  ];
	}
}