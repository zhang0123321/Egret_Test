/**
 * Created by Jacob.Yang on 2017/7/12.
 *
 */


module game 
{
	export class Label extends eui.Label 
	{
		private textFlowArr: egret.ITextElement[];
		public constructor() 
		{
			super();
			this.textFlowArr = [];
		}

		public addTextFlow(text: string, textColor?: number, size?: number, fontFamily?: string, italic?: boolean, strokeColor?: number, stroke?: number): void 
		{
			let style: any = {};
			if (textColor) style.textColor = textColor;
			if (size) style.size = size;
			if (fontFamily) style.fontFamily = fontFamily;
			if (italic) style.italic = italic;
			if (strokeColor) style.strokeColor = strokeColor;
			if (stroke) style.stroke = stroke;

			this.textFlow.push({ text: text, style: style });
			this.textFlow = this.textFlowArr;
		}
	}
}