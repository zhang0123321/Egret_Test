/**
 * Created by Jacob.Yang on 2017/7/11.
 *
 */
/**最顶层的弹窗 */
class ScreenWindowOps extends BaseSprite 
{

	private static _instance: ScreenWindowOps;

	public static get instance(): ScreenWindowOps 
	{
		if (!this._instance) 
		{
			this._instance = new ScreenWindowOps();
		}
		return this._instance;
	}

	private panelArr: egret.DisplayObject[];
	private shape: egret.Shape = new egret.Shape();

	public constructor() 
	{
		super();
		this.panelArr = [];

		this.addListener(this, egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
		this.addListener(this.shape, egret.TouchEvent.TOUCH_TAP, this.shapeHandler, this);
	}

	private onAddToStage(e: egret.Event): void 
	{
		this.shape.graphics.beginFill(0x000000, 0.5);
		this.shape.graphics.drawRect(0, 0, Global.stage_width, Global.stage_height);
		this.shape.graphics.endFill();
		this.shape.touchEnabled = true;
	}
	/**获取存储弹窗数组 */
	public getpanelArr():egret.DisplayObject[]
	{
		return this.panelArr;
	}
	/**添加弹窗*/
	public add(dis: egret.DisplayObject): void 
	{
		if (this.panelArr.indexOf(dis) != -1) return;
		this.addChild(this.shape);
		this.shape.visible = true;
		this.addChild(dis);
		// dis.x = (Global.stage_width - dis.width) / 2;
		// dis.y = (Global.stage_height - dis.height) / 2;
		this.panelArr.push(dis);
	}
	/**移除弹窗*/
	public remove(dis: egret.DisplayObject): void 
	{
		var index: number = this.panelArr.indexOf(dis);
		if (index == -1) return;
		this.panelArr.splice(index, 1);
		if (this.panelArr.length != 0)
			this.setChildIndex(this.shape, this.getChildIndex(this.shape) - 1);
		else
			this.shape.visible = false;
		this.removeChild(dis);
		dis = null;
	}
	/**移除所有弹窗*/
	public removeAll(): void 
	{
		for (var i: number = 0; i < this.panelArr.length; ++i) 
		{
			this.removeChild(this.panelArr[i]);
			this.panelArr[i] = null;
		}
		this.panelArr = [];
		this.shape.visible = false;
	}
	/**隐藏弹窗*/
	public hide(cls: any): void 
	{
		for (var i: number = 0; i < this.panelArr.length; ++i) 
		{
			if (this.panelArr[i] instanceof cls) 
			{
				this.panelArr[i].visible = false;
				if (this.panelArr.length != 0)
					this.setChildIndex(this.shape, this.getChildIndex(this.shape) - 1);
				else
					this.shape.visible = false;
			}
		}
	}
	/**展示弹窗*/
	public show(cls: any): void 
	{
		for (var i: number = 0; i < this.panelArr.length; ++i) 
		{
			if (this.panelArr[i] instanceof cls) 
			{
				this.panelArr[i].visible = true;
				if (this.panelArr.length != 0)
					this.setChildIndex(this.shape, this.getChildIndex(this.shape) - 1);
				else
					this.shape.visible = false;
			}
		}
	}
	/**点击遮罩层关闭最上层弹框*/
	private shapeHandler(): void 
	{
		if (this.panelArr.length > 1)
			this.remove(this.panelArr[this.panelArr.length - 1]);
		else
			this.removeAll();
		console.log("当前存在的弹窗 ：");
		console.log(this.panelArr);
	}
}