import './ystack.css';
import type { HtmlHTMLAttributes } from "react";
import { ystackClass } from "./classname";
import clsx from "clsx/lite";

export interface YStackProps extends HtmlHTMLAttributes<HTMLDivElement> {
	gap?: number | string;
	align?: 'left' | 'center' | 'right' | 'stretch';
	justify?: 'top' | 'center' | 'bottom' | 'space-between' | 'space-around' | 'space-evenly';
}

export function YStack(props: YStackProps) {
	const { children, gap, align, justify, ...rest } = props;

	let alignClass: string | undefined = undefined;
	let justifyClass: string | undefined = undefined;

	switch(align) {
		case 'left':
			alignClass = ystackClass.align.left;
			break;
		case 'center':
			alignClass = ystackClass.align.center;
			break;
		case 'right':
			alignClass = ystackClass.align.right;
			break;
		case 'stretch':
			alignClass = ystackClass.align.stretch;
			break;
	}

	switch(justify) {
		case 'top':
			justifyClass = ystackClass.justify.top;
			break;
		case 'center':
			justifyClass = ystackClass.justify.center;
			break;
		case 'bottom':
			justifyClass = ystackClass.justify.bottom;
			break;
		case 'space-between':
			justifyClass = ystackClass.justify.spaceBetween;
			break;
		case 'space-around':
			justifyClass = ystackClass.justify.spaceAround;
			break;
		case 'space-evenly':
			justifyClass = ystackClass.justify.spaceEvenly;
			break;
	}

	const rootClass = clsx(ystackClass.root, alignClass, justifyClass);
	let style: React.CSSProperties | undefined = undefined;
	if(gap) {
		style = {
			[ystackClass.gapVar]: gap
		}
	}

	return (
		<div className={rootClass} style={style} {...rest}>
			{children}
		</div>
	)
}
