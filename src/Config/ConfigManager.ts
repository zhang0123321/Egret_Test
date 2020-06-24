class ConfigManager {
	private static _instance: ConfigManager;

	public static get instance(): ConfigManager {
		if (this._instance == null) {
			this._instance = new ConfigManager();
		}
		return this._instance;
	}



	public init(): void {
		BuyConfigManager.instance.init();
		FloorConfigManager.instance.init();		
		FoodConfigManager.instance.init();
		HireConfigManager.instance.init();
		ScienceConfigManager.instance.init();
		SkilConfigManager.instance.init( );
		UpgradeConfigManager.instance.init( );
		StoreConfigManager.instance.init();
		MoveConfigManager.instance.init();
	}
}