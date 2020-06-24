class HttpMessage {
    private static _instance: HttpMessage;
    //请求服务器地址
    private serverPath: string = "http://" + "172.16.3.43/Cat_Boss/";

    private request: egret.HttpRequest;

    private urlLoader: egret.URLLoader;
    private requestList: any[];

    private stopRequest: boolean = false;

    public static get instance(): HttpMessage {
        if (!this._instance) {
            this._instance = new HttpMessage();
        }
        return this._instance;
    }


    public constructor() {
        this.requestList = [];
        this.request = new egret.HttpRequest();
        this.request.addEventListener(egret.Event.COMPLETE, this.sucess, this);
        this.request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.error, this);
        this.urlLoader = new egret.URLLoader();
        this.urlLoader.addEventListener(egret.Event.COMPLETE, this.sucess, this);
        this.urlLoader.addEventListener(egret.IOErrorEvent.IO_ERROR, this.error, this);
    }

    

    public send(url: string, params: any, callBack: Function, thisObject: any): void {
        params = params || {};

        this.requestList.push({ url: url, params: params, callBack: callBack, thisObject: thisObject});
        if (this.requestList.length == 1) {
            this.sendNext();
        }
    }

    private sendNext(): void {

        if (this.stopRequest) return;

        let params: any = this.requestList[0].params;
        let url: string = this.requestList[0].url;
        var paramStr: string = "";
        var sign: string = "";
        for (var key in params) {
            if (params[key] instanceof Array) {
                paramStr += sign + key + "=" + JSON.stringify(params[key]);
            }
            else {
                paramStr += sign + key + "=" + params[key];
            }
            sign = "&";
        }

        this.request.open( this.serverPath + url , egret.HttpMethod.POST);
        this.request.responseType = egret.HttpResponseType.TEXT;
        
        this.request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        this.request.send(paramStr);
    }


    private sucess(e: egret.Event): void {

        let data: any = JSON.parse(e.target.response);

        egret.log(data);
        let callBack: Function = this.requestList[0].callBack;
        let thisObject: any = this.requestList[0].thisObject;

        if (data != null) {
            if (data.ret == true) {
                callBack.call(thisObject, data.data);
            }
            else {
                TipTextController.instance.show(data.msg, Contents.TIP_TEXT_COLOR_RED);
            }
        }
        else {
            TipTextController.instance.show("data is null", Contents.TIP_TEXT_COLOR_RED);
        }

        this.checkNext();

    }

    private error(xhr: XMLHttpRequest, errorType: string, err: Error): void {

        let url: string = this.requestList[0].url;
        LogUtil.log(url + "_" + errorType + "    ");
        TipTextController.instance.show(url + " error", Contents.TIP_TEXT_COLOR_RED);
        this.checkNext();
    }

    public checkNext(): void {
        this.requestList.shift();
        if (this.requestList.length > 0) {
            this.sendNext();
        }
    }
}