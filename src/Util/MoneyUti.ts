/**
 * Created by Jacob.Yang on 2017/7/11.
 *
 */


class MoneyUti {
	/**单位数组 */
	public static _companyArr: string[] = ["k", "m", "b", "t", "aa",
		"bb", "cc", "dd", "ee", "ff",
		"gg", "hh", "ii", "jj", "kk",
		"ll", "mm", "nn", "oo", "pp",
		"qq", "rr", "ss", "tt", "uu",
		"vv", "ww", "xx", "yy", "zz",
		"Aa", "Bb", "Cc", "Dd", "Ee",
		"Ff", "Gg", "Hh", "Ii", "Jj",
		"Kk", "Ll", "Mm", "Nn", "Oo",
		"Pp", "Qq", "Rr", "Ss", "Tt",
		"Uu", "Vv", "Ww", "Xx", "Yy",
		"Zz", "AA", "BB", "CC", "DD",
		"EE", "FF", "GG", "HH", "II",
		"JJ", "KK", "LL", "MM", "NN",
		"OO", "PP", "QQ", "RR", "SS",
		"TT", "UU", "VV", "WW", "XX",
		"YY", "ZZ",
		"aA", "aB", "aC", "aD", "aE", "aF", "aG", "aH", "aI", "aJ", "aK", "aL", "aM", "aN", "aO", "aP", "aQ", "aR", "aS", "aT", "aU", "aV", "aW", "aX",
		"aY", "aZ", "bA", "bB", "bC", "bD", "bE", "bF", "bG", "bH", "bI", "bJ", "bK", "bL", "bM", "bN", "bO", "bP", "bQ", "bR", "bS", "bT", "bU", "bV", "bW", "bX",
		"bY", "bZ"];
	public static  _companyCount:number = 1;
	public constructor() {
	}

	// /**四位进一（方法一） */
	// public static format1( money:number ):string
	// {
	// 	let moneyString:string="";
	// 	let money_num:number=0;
	// 	if(money<10000)
	// 	{
	// 		return ""+money;
	// 	}else{
	// 		for(let i=1;i<=this._companyArr.length;i++)
	// 		{
	// 			if(money<=Math.pow(10,4+i*4) && money>=Math.pow(10,4+(i-1)*4))
	// 			{
	// 				money_num=((money-money%Math.pow(10,4+(i-1)*4-2))/Math.pow(10,4+(i-1)*4));
	// 				moneyString=money_num.toFixed(2) +this._companyArr[i-1];
	// 				return moneyString;
	// 			}
	// 		}	
	// 	}
	// 	 //return;
		
	// }
	/**三位进一（方法二） */
	// public static showUIGold(gold: number, initValue: number = 1): string {
	// 	if (gold < 1000) {
	// 		return Math.floor(gold) + "";
	// 	} else if (gold >= Math.pow(1000, this._companyCount) && gold < Math.pow(1000, this._companyCount + 1)) {
	// 		// egret.log("1111111111----->" + Math.abs(gold / Math.pow(1000, this._companyCount)));
	// 		// egret.log("1111111111----->" + Math.abs(this._companyCount - 1));
	// 		return (gold / Math.pow(1000, this._companyCount)).toFixed(2) + this._companyArr[this._companyCount - 1];
	// 	} else {
	// 		if (gold >= Math.pow(1000, this._companyCount + 1)) {
	// 			this._companyCount++;
	// 			this.showUIGold(gold, this._companyCount);
	// 		} else if (gold <= Math.pow(1000, this._companyCount)) {
	// 			this._companyCount--;
	// 			this.showUIGold(gold, this._companyCount);
	// 		} else {
	// 			// egret.log("2222222----->" + Math.abs(gold / Math.pow(1000, this._companyCount)));
	// 			// egret.log("2222222----->" + Math.abs(this._companyCount - 1));
	// 			return (gold / Math.pow(1000, this._companyCount)).toFixed(2) + this._companyArr[this._companyCount - 1];
	// 		}
	// 	}
	// 	// egret.log("lost----->" + Math.abs(gold / Math.pow(1000, this._companyCount)));
	// 	// egret.log("lost----->" + Math.abs(this._companyCount - 1));
	// 	return (gold / Math.pow(1000, this._companyCount)).toFixed(2) + this._companyArr[this._companyCount - 1];
	// }
	/**三位进一（方法一） */
	public static format( money:number ):string
	{
		money = Number(money.toFixed(2));
		let moneyString:string="";
		let money_num:number=0;
		if(money<1000)
		{	
			return ""+money;
		}else{
			for(let i=1;i<=this._companyArr.length;i++)
			{
				if(money<Math.pow(10,3+i*3) && money>=Math.pow(10,3+(i-1)*3))
				{
					money_num=((money-money%Math.pow(10,3+(i-1)*3-2))/Math.pow(10,3+(i-1)*3));
					moneyString=money_num.toFixed(2) +this._companyArr[i-1];
					return moneyString;
				}
			}	
		}
		 //return;
	}
		
}