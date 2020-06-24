/**
 * Created by Jacob.Yang on 2017/7/11.
 *
 */


class HttpMsgCMD {

    /***********************************************************************************主界面*********************************************************************************************** */
    /**用户登录（授权）  返回用户信息 */
    static LOGIN:string = "userinfo/login/";
    /**用户获取金币   同步金币     返回当前金币数量 */
    static GET_GOLD:string = "userGold/getGold/";
    /**修改金币     同步金币    */
    static SET_GOLD:string = "userGold/setGold/";

    /**用户获取钻石    返回当前钻石数量 */
    static GET_DIAMONDS:string = "userDiamonds/getDiamonds/";
    /**diamonds（钻石）   修改钻石 */
    static set_DIAMONDS:string = "userDiamonds/setDiamonds/";

    /**获取用户声望值      返回用户当前声望值 */
    static GET_PRESTIGE:string = "prestige/getPrestige/";
    /**prestige（声望值）       修改用户声望值 */
    static set_PRESTIGE:string = "prestige/setPrestige/";

    /**进入游戏后判断离线长时间 单位 s    返回离线时长和离线是的离线收益    离线时间单位是秒*/
    static GET_EARNINGS:string = "off/getendtime/";
    /**earnings（离线产出）  存储上退出游戏或进入后台是的时间戳   没有返回值 */
    static set_EARNINGS:string = "off/endLine/";

    /**获取楼层数据   返回每个楼的数据信息*/
    static GET_FLOOR_DATE:string = "off/startGame/";
    /**存储楼层数据 没有返回值*/
    static set_FLOOR_DATE:string = "off/endGame/";

    /***********************************************************************************新手引导*********************************************************************************************** */
    /**获取当前新手引导步数 */
    static GET_COURSENUM:string = "course/getCourseNum/";
    /**修改新手引导步数 */
    static set_COURSENUM:string = "course/setCourseNum/";
    
    /***********************************************************************************猫食*********************************************************************************************** */
    /**获取猫食的激活状态 0：已激活 1：未激活       返回每个猫食的激活状*/
    static GET_CATFOOD:string = "food/getCatFood/";
    /**修改猫食的激活状态 0：已激活 1：未激活      没有返回值*/
    static set_CATFOOD:string = "food/setCatFood/";

    /***********************************************************************************科技*********************************************************************************************** */
    /**获取用户购买的科技步数    返回   金币科技  和钻石科技   购买到那一步*/
    static GET_SCIENCE:string = "science/getScience/";
    /**userid 修改当前步数*/
    static set_SCIENCE:string = "science/setScience/";
   

    /***********************************************************************************猫英*********************************************************************************************** */
    /**  id（猫英的id）     获取猫英的等级数据     返回猫英的数据*/
    static GET_BUYHIRE:string = "hire/getHire/";
    /**id（猫英的id）   lv（猫英的等级）    购买猫英       返回购买的猫英的数据*/
    static set_BUYHIRE:string = "hire/buyHire/";




    /***********************************************************************************杂货铺*********************************************************************************************** */
    /** d（道具的id）   multiple（道具的倍数）    购买杂货铺道具    返回道具的id和道具的倍数*/
    static GET_PROP:string = "Cat_Home/getProp/";
    /**id（道具的id）    获取杂货铺的道具      返回道具的id和道具的倍数*/
    static set_PROP:string = "Cat_Home/buyProp/";
    /**投资次数 */
    static set_Investment:string = "investment/setInvestment/";
}
