/**
 * Created by Jacob.Yang on 2017/7/11.
 *
 */


class MsgCMD {

    /**关闭两边容器 */
    static CLOSE_GROUP:number = 0;
    /**两边容器打开 */
    static OPEN_GROUP:number = 1; 

    static ENTER_MAIN_SCENE:number = 10000001;
    static UPDATE_USER_GOLD:number = 10000002;
    
    static MAINPLAY_VIEW:number = 10000003; //主界面

    static MOVIECLIP_PLAY_OVER:number = 90000000;
    /**猫食界面购买完成之后放置最后 */
    static CATFOOD_BUTTON:number = 100000004;
    /**猫英界面购买完猫之后的排序状态 */
    static CATELITE_SORT : number = 100000005;
}