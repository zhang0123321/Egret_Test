class Main extends eui.UILayer {

    protected createChildren(): void {
        super.createChildren();

        // if (this.stage.stageWidth / this.stage.stageHeight <= 750 / 1550 ||
        //     this.stage.stageWidth / this.stage.stageHeight >= 750 / 1200) {
        //     this.stage.scaleMode = egret.StageScaleMode.SHOW_ALL;
        // }

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());

        this.runGame().catch(e => {
            // console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource();
        this.createGameScene();
    }

    private async loadResource() {
        try {
            await RES.setMaxLoadingThread(1);
            await RES.setMaxRetryTimes(5);
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
          //await RES.loadConfig("default.res.json","http://st.isotoo.com/cat_boss_resource/");
            await this.loadTheme();
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
            await this.login();
        } catch (e) {
            console.error(e);
        }
    }

    private async login() {
        return new Promise((resolve, reject) => {
            this.addChild(new LoginModule(resolve));
            this.addChild(TipTextController.instance);
            // this.createGameScene();
        })
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);
        })
    }

    private textfield: egret.TextField = new egret.TextField();
    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createGameScene(): void {




        Global.stage_height = this.stage.stageHeight;
        Global.stage_width = this.stage.stageWidth;

        this.stage.addEventListener(egret.Event.ACTIVATE, this.onActivateHandler, this);
        this.stage.addEventListener(egret.Event.DEACTIVATE, this.onDeactivateHandler, this);
        
        // ConfigManager.instance.init();

        this.addChild(new MainModule()); 
    }
   
    /**游戏前台 */
    private onActivateHandler() {
  
    }
    /**游戏后台 */
    private onDeactivateHandler() {

        
    }
    
}