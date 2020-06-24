class SkilDataManager {
	private static _instance:SkilDataManager;
	public static getinstance():SkilDataManager
	{
		if(SkilDataManager._instance == null)
		{
			SkilDataManager._instance = new SkilDataManager();
		}
		return SkilDataManager._instance;
	}
	public constructor() {
	}
}