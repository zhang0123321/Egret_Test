/**
 * Created by Jacob.Yang on 2017/7/11.
 *
 */

class Global {
    public static proportion: number;

    public static stage_width: number = 720;
    public static stage_height: number = 1280;

    public static curMapIndex: number = 0;  //挂机地图（章节）

    public static playerMoveSpeed: number = 5;
    
    //是否正在战斗
    public static bChallengeBoss: boolean = false;
    //玩家经验
    public static tempPlayerExp: number = 0;
    //剩余关卡奖励次数
    public static tempLevelRewardTimes: number = 0;
    public static pathLevelTimes: number = 0;
    public static viewport:number = 0;


    public constructor() {

    }
}
