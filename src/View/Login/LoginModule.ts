class LoginModule extends BaseModule implements IMessage{
	private exml_bg:eui.Image;
	private exml_loginBtn: eui.Button;
	private exml_idText: eui.EditableText;
	private resolve: Function;
	public constructor(resolve: Function) {

		super();

		this.skinName = "LoginModuleSkin";

		this.resolve = resolve;
	}
	public add_view_handler(e: egret.Event): void {

		super.add_view_handler(e);
		this.addListener(this.exml_loginBtn, egret.TouchEvent.TOUCH_TAP, this.loginHandler, this);
		this.addMessage( MsgCMD.ENTER_MAIN_SCENE , this );

		this.exml_bg.height = this.stage.stageHeight;
		this.exml_loginBtn.y  = this.stage.stageHeight - this.stage.stageHeight / 10;
		this.exml_idText.y = this.exml_loginBtn.y - this.exml_loginBtn.height*2;

	}

	createChildren(): void {

		super.createChildren();
	}
	
	recvMsg(cmd:number, data:any):void
	{
		if( cmd == MsgCMD.ENTER_MAIN_SCENE )
		{
			this.removeMySelf();
		}
	}


	private loginHandler(e: egret.TouchEvent): void {

		if( this.exml_idText.text == "" )
		{
			TipTextController.instance.show( "请输入登陆凭证" , Contents.TIP_TEXT_COLOR_RED );
			return;
		}

		UserService.instance.requestLogin( this.exml_idText.text );
	}

	private removeMySelf( ):void{


		if( this.parent )
		{
			if( this.parent.contains( this ) )
			{
				this.parent.removeChild( this );
			}
		}
		this.resolve();
	
	}
}