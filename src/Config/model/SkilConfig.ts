class SkilConfig extends BaseConfigModel {

	public id:number = 0;
	public time:number = 0;
	public type:number = 0;
	public multiple:number = 0; //收益
	public title:string = ""; //收益显示文本


	public constructor() {
		super();
		this.fieldArr = ["id", "time", "type","multiple", "title"];
	}
}