/**
* Created by yangyang on 16/6/27.
*/
class TipTextController extends egret.Sprite
{
    private static  _instance:TipTextController;
    public static get instance():TipTextController
    {
        if( !this._instance )
        {
            this._instance = new TipTextController();
        }
        return this._instance;
    }

    public constructor()
    {
        super();
        this.touchEnabled = false;
        this.touchChildren = false;
    }

    public show( msg:string , textColor:number ):void{
        
        let tip:TipView = new TipView( msg , textColor );
            tip.x = Global.stage_width/2 - tip.width/2;
            tip.y = 400;
        this.addChild( tip );
    }
    public show1(str:string)
    {
        let tip:Tips1View = new Tips1View(str);
        this.addChild(tip); 
    }
    /**移除掉当前场景所有子元素*/
	public removeAll(): void {
		let num: number = this.numChildren;
		for (var i: number = 0; i < num; ++i) {
			this.removeChildAt(i);
		}
	}
}