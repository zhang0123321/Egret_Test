class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {

    private backGround: egret.ImageLoader = new egret.ImageLoader();
    private land: egret.ImageLoader = new egret.ImageLoader();
    private tiaoLand: egret.ImageLoader = new egret.ImageLoader();
    private tiaoLandMask: egret.ImageLoader = new egret.ImageLoader();


    /**背景*/
    private backGroundImg: egret.Bitmap;
    /**进度条底*/
    private landImg: egret.Bitmap;
    /**进度条*/
    private tiaoLandImg: egret.Bitmap;
    /**进度条遮罩*/
    private tiaoLandMaskImg: egret.Bitmap;
    /**玩家*/
    private playerImg: egret.Bitmap;
    /**是否预加载完成*/
    private load: boolean = false;

    public constructor() {
        super();
        //添加监听
        this.backGround.once(egret.Event.COMPLETE, this.imageHandler, this);
        this.land.once(egret.Event.COMPLETE, this.imageHandler, this);
        this.tiaoLand.once(egret.Event.COMPLETE, this.imageHandler, this);
        this.tiaoLandMask.once(egret.Event.COMPLETE, this.imageHandler, this);
        //开始加载
        this.backGround.load("resource/assets/logo/logoBG.jpg");
        this.createView();
    }
    private createView(): void {
    }

    private imageHandler(e: egret.Event) {
        let bitmap: egret.ImageLoader = e.currentTarget;
        let bmd: egret.BitmapData = bitmap.data;
        let texture: egret.Texture = new egret.Texture();
        texture._setBitmapData(bmd);
        if (this.i == 0) {//添加底图
            this.backGroundImg = new egret.Bitmap(texture);
            this.addChildAt(this.backGroundImg, this.i);
            this.backGroundImg.height = this.stage.stageHeight;
            this.backGroundImg.width = this.stage.stageWidth;
            this.land.load("resource/assets/logo/di.png");
        } 
        else if (this.i == 1) {//底框
            this.landImg = new egret.Bitmap(texture);
            this.addChildAt(this.landImg, this.i);
            this.landImg.x = (this.stage.stageWidth - this.landImg.width) / 2;
            this.landImg.y = (this.stage.stageHeight * 0.82);
            this.tiaoLand.load("resource/assets/logo/tiao.png");
        } else if (this.i == 2) {//添加草皮
            this.tiaoLandImg = new egret.Bitmap(texture);
            this.addChildAt(this.tiaoLandImg, this.i);
            this.tiaoLandImg.x = this.landImg.x;
            this.tiaoLandImg.y = this.landImg.y;
            this.tiaoLandMask.load("resource/assets/logo/tiao.png");
        } 
        else if (this.i == 3) {//添加草皮遮罩
            this.tiaoLandMaskImg = new egret.Bitmap(texture);
            this.addChildAt(this.tiaoLandMaskImg, this.i);
            this.tiaoLandMaskImg.x = this.tiaoLandImg.x - this.tiaoLandImg.width;
            this.tiaoLandMaskImg.y = this.tiaoLandImg.y;
            //this.tiaoLandMaskImg.scaleX = 0;
            this.tiaoLandMaskImg.mask = this.tiaoLandImg;
            this.load = true;
        } 
        // else if (this.i == 4) {//添加草团
        //     this.playerImg = new egret.Bitmap(texture);
        //     this.addChildAt(this.playerImg, this.i);
        //     this.playerImg.x = this.tiaoLandMaskImg.x + this.tiaoLandMaskImg.width * this.tiaoLandMaskImg.scaleX - this.playerImg.width / 2;
        //     this.playerImg.y = this.tiaoLandMaskImg.y - this.playerImg.height;
        //     this.load = true;
        // }
        this.i++;
    }

    /**图层深度*/
    private i: number = 0;
    public onProgress(current: number, total: number): void {
        let n = current / total;
        if (this.load) {
            //this.tiaoLandMaskImg.scaleX = n;
            this.tiaoLandMaskImg.x  = this.tiaoLandImg.x - this.tiaoLandImg.width + this.tiaoLandImg.width * n;
           
        }
    }
}
