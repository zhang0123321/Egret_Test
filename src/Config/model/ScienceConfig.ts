class ScienceConfig extends BaseConfigModel {

	public id:number = 0;
	public name:string = "";
	public buy_coust:string = "0";
	public skil_id:number = 0;



	public constructor() {
		super();
		this.fieldArr = ["id", "name", "buy_coust", "skil_id" ];
	}
}