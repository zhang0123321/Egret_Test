/**
 * Created by Jacob.Yang on 2016/6/14.
 *
 */
class BaseModule extends eui.Component 
{

    private listenerArray: any[];
    private messageArray: any[];
    /**此类是否已销毁，防止因未销毁干净导致通过动画或者某种其它形式再次给其子项添加监听时报错*/
    private isDestroy: boolean = false;

    public constructor() 
    {
        super();
        this.listenerArray = [];
        this.messageArray = [];
        this.isDestroy = false;

        this.addListener(this, egret.Event.REMOVED_FROM_STAGE, this.remove_view_handler, this);
        this.addListener(this, egret.Event.ADDED_TO_STAGE, this.add_view_handler, this);
    }

    /**子类手动覆盖此方法，子类需要 super.add_view_handler(e) */
    public add_view_handler(e: egret.Event): void 
    {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.add_view_handler, this);
    }

    /**添加监听
     * @param dis 监听目标
     * @param type 监听类型
     * @param listener 回调方法
     * @param thisObject 作用域this
    */
    public addListener(dis: egret.EventDispatcher, type: string, listener: Function, thisObject: any, useCapture: boolean = false): void 
    {
        if (!this.isDestroy) 
        {
            this.listenerArray.push([dis, type, listener, thisObject, useCapture]);
            dis.addEventListener(type, listener, thisObject, useCapture);
        }
    }

    public removeListener(dis: egret.EventDispatcher, type: string, listener: Function, thisObject: any, useCapture: boolean = false): void 
    {
        for (var i: number = 0; i < this.listenerArray.length; ++i) 
        {
            if (this.listenerArray[i][0] == dis &&
                this.listenerArray[i][1] == type &&
                this.listenerArray[i][2] == listener &&
                this.listenerArray[i][3] == thisObject &&
                this.listenerArray[i][4] == useCapture) 
            {
                dis.removeEventListener(type, listener, this, useCapture);
                this.listenerArray.splice(i, 1);
                i--;
            }
        }
    }

    /**监听消息
     * @param msgId 消息ID
     * @param msgObj 作用域this
    */
    public addMessage(msgId: number, msgObj: IMessage): void 
    {
        this.messageArray.push([msgId, msgObj]);
        Message.instance.add(msgId, msgObj);
    }

    /**自动移除监听。
     * 如果类里有计时器，需要手动覆盖此方法 super.remove_view_handler(e) 并且停掉计时器
    */
    public remove_view_handler(e: egret.Event): void 
    {
        this.destroy();
    }

    /**自动销毁当前类的所有监听*/
    private destroy(): void 
    {
        this.isDestroy = true;
        while (this.numChildren > 0) 
        {
            this.removeChildAt(0)
        }

        if (this.listenerArray) 
        {
            for (var i: number = 0; i < this.listenerArray.length; i++) 
            {
                this.listenerArray[i][0].removeEventListener(this.listenerArray[i][1], this.listenerArray[i][2], this.listenerArray[i][3], this.listenerArray[i][4]);
            }
        }
        this.listenerArray = null;
        if (this.messageArray) 
        {
            for (var i: number = 0; i < this.messageArray.length; ++i) 
            {
                Message.instance.remove(this.messageArray[i][0], this.messageArray[i][1]);
            }
            this.messageArray = null;
        }
    }
}
