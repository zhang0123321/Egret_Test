class UserService {

	private static _instance: UserService;

	public static get instance(): UserService {
		if (this._instance == null) {
			this._instance = new UserService();
		}
		return this._instance;
	}


	public constructor() {
	}

	public requestLogin( userId:string ):void{
		
		HttpMessage.instance.send( HttpMsgCMD.LOGIN , {userid:userId} , this.loginResponse , this );
	}

	private loginResponse( data:any ):void{

		egret.log("登入信息："+ data.newuser);
		Message.instance.send( MsgCMD.ENTER_MAIN_SCENE );
	}

}