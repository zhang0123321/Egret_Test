class Tips1View extends BaseModule{
	private exml_group:eui.Group;
	private exml_label:eui.Label;
	private str:string = "" ;
	public constructor(str:string) {
		super();
		this.skinName = "Tips1Skin";
		this.str = str ;
	}
	public add_view_handler( e:egret.Event ):void{

		super.add_view_handler( e );;
		this.init(this.str);
	}
	private init(str:string)
	{
		this.exml_group.x = -154 ;
		this.exml_label.text = str ;
		egret.Tween.get(this.exml_group).to({x:154},1000).wait(5000).call(()=>{
				if( this.parent )
				{
					if( this.parent.contains( this ) )
					{
						this.parent.removeChild( this);
					}
				}
			});
	}
}