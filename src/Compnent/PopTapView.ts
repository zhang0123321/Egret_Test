class PopTapView extends BaseModule {
	private tabClasses: any[];
	private desc: string[];

	private tabViews: egret.DisplayObject[];
	private currentIndex: number = 0;

	public exml_titleTex: eui.Label;

	public exml_tabBtn0: eui.Button;
	public exml_tabBtn1: eui.Button;
	public exml_tabBtn2: eui.Button;
	public exml_tabBtn3: eui.Button;
	
	public exml_btnClose: eui.Button;
	public exml_backBtn: eui.Button;
	public exml_helpBtn: eui.Button;


	public constructor(classes: any[], desc: string[], CurIndex?:number) {
		super();

		if (classes == null || classes.length == 0) {
			LogUtil.error("PopTapView 类数量不正确");
		}

		if (desc == null || desc.length == 0) {
			LogUtil.error("PopTapView 按钮数量不正确");
		}

		if (classes.length != desc.length) {
			LogUtil.error("PopTapView 类数量和按钮数量不正确");
		}

		this.tabClasses = classes;
		this.desc = desc;

		if(CurIndex == null)
			this.currentIndex = 0;
		else
			this.currentIndex = CurIndex;

		LogUtil.log(this.currentIndex);

		this.tabViews = [];

		this.skinName = "PopUpViewSkin";
	}

	public add_view_handler(e: egret.Event): void {

		super.add_view_handler(e);

		this.addListener(this.exml_btnClose, egret.TouchEvent.TOUCH_TAP, this.closeHandler, this);
		this.addListener(this.exml_helpBtn, egret.TouchEvent.TOUCH_TAP, this.helpHandler, this);
		this.addListener(this.exml_backBtn, egret.TouchEvent.TOUCH_TAP, this.closeHandler, this);
	}

	createChildren(): void {

		super.createChildren();


		this.anchorOffsetX = this.width / 2;
		this.anchorOffsetY = this.height / 2;
		this.x = Global.stage_width / 2;
		this.y = Global.stage_height / 2;

		this.updateView();
	}


	private updateView(): void {
		let len: number = this.tabClasses.length;
		for (var i: number = 0; i < 4; ++i) {
			if (i < len) {
				this["exml_tabBtn" + i].label = this.desc[i];
				this.addListener(this["exml_tabBtn" + i], egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
			}
			else {
				this["exml_tabBtn" + i].enable = false;
				this["exml_tabBtn" + i].visible = false;
			}
		}
		this.selectTab(this.currentIndex);
	}

	private touchHandler(e: egret.TouchEvent): void {
		switch (e.target) {
			case this.exml_tabBtn0:
				this.selectTab(0);
				break;
			case this.exml_tabBtn1:
				this.selectTab(1);
				break;
			case this.exml_tabBtn2:
				this.selectTab(2);
				break;
			case this.exml_tabBtn3:
				this.selectTab(3);
				break;
		}
	}


	public selectTab(index: number): void {

		for (var i: number = 0; i < 4; ++i) {
			if (this["exml_tabBtn" + i].visible) {
				this["exml_tabBtn" + i].enabled = true;
			}
		}

		this["exml_tabBtn" + index].enabled = false;

		this.exml_titleTex.text = this["exml_tabBtn" + index].label;


		this.currentIndex = index;

		let dis: egret.DisplayObject = this.tabViews[index];
		if (dis == null) {
			dis = new this.tabClasses[index]();
			this.tabViews[index] = dis;
		}

		this.addChild(this.tabViews[index]);
 
		for (let i: number = 0; i < 4; ++i) {
			if (this.tabViews[i]) {
				this.tabViews[i].visible = i == index;
			}
		}
	}

	private closeHandler(e: egret.TouchEvent): void {

		PanelController.instance.remove(this);
	}

	private helpHandler(e: egret.TouchEvent): void {

		LogUtil.log("PopTapView----->help");
	}
}