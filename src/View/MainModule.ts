class MainModule extends BaseSprite implements IMessage{
	/**底层*/
	private viewSp: egret.Sprite;
	/**中层*/
	private firstSp: egret.Sprite;

	public constructor() {
		super();
		
		this.viewSp = new egret.Sprite();
		this.addChild(this.viewSp);

		this.firstSp = new egret.Sprite();
		this.addChild(this.firstSp);


		this.viewSp.addChild( new MainPlayView());
		
		//中层弹窗		
		this.firstSp.addChild(PanelController.instance);
		

		//提示
		this.addChild(TipTextController.instance);


		/**添加主界面消息 */
		this.addMessage(MsgCMD.MAINPLAY_VIEW,this);
	}

	recvMsg(cmd:number, data:any):void

	{
		switch( cmd )
		{
			case MsgCMD.MAINPLAY_VIEW:
				this.removeAll();
				this.viewSp.addChild( new MainPlayView());
			break;
		}
	}

	/**移除掉当前场景所有子元素*/
	private removeAll(): void {
		let num: number = this.viewSp.numChildren;
		for (var i: number = 0; i < num; ++i) {
			this.viewSp.removeChildAt(i);
		}
	}
}