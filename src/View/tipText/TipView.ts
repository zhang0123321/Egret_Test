class TipView extends BaseModule
{
	private exml_infoLabel:eui.Label;

	private info:string;

	private textColor:number;
	public constructor( _info:string , _textColor:number ) 
	{
		super();
		this.skinName = "TipsSkin";

		this.info = _info;
		this.textColor = _textColor;
	}

	public add_view_handler( e:egret.Event ):void{

		super.add_view_handler( e );

		this.addListener( this , egret.Event.ENTER_FRAME , this.updateHandler , this );
		this.init();
	}

	private init():void{

		this.touchEnabled = false;
		this.touchChildren = false;
		this.exml_infoLabel.textColor = this.textColor;
		this.exml_infoLabel.text = this.info;

		// let tw:egret.Tween = egret.Tween.get( this);// 可加入{loop:true}参数 是否一直循环
		// 	tw.to( {y:this.y - 500} , 1000 );//文字移动  to(+- 上下方向 移动距离  移动时长（越小越快）)
		// 	//tw.to( {y:this.y} , 1000 );//文字移动  to(+- 上下方向 移动距离  移动时长（越小越快）)
			
		// 	tw.call( this.removeMySelf , this );

		egret.setTimeout( this.removeMySelf , this , 1000 );
	}

	private updateHandler( e:egret.Event ):void{

		this.y -= 5;
		
	}

	private removeMySelf():void{

		if( this.parent )
		{
			if( this.parent.contains( this ) )
			{
				this.parent.removeChild( this);
			}
		}
	}
}