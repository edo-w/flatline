import './xstack.css';
import type { HTMLAttributes } from 'react';
import clsx from 'clsx/lite';
import { xstackClass } from './classname';

export interface XStackProps extends HTMLAttributes<HTMLDivElement> {
	gap?: number | string;
	align?: 'top' | 'center' | 'bottom' | 'stretch' | 'baseline';
	justify?: 'left' | 'center' | 'right' | 'space-between' | 'space-around' | 'space-evenly';
}

export function XStack(props: XStackProps) {
	const { children, gap, align, justify, ...rest } = props;
	let alignClass: string | undefined = undefined;
	let justifyClass: string | undefined = undefined;

	switch(align) {
		case 'top':
			alignClass = xstackClass.align.top;
			break;
		case 'center':
			alignClass = xstackClass.align.center;
			break;
		case 'bottom':
			alignClass = xstackClass.align.bottom;
			break;
		case 'stretch':
			alignClass = xstackClass.align.stretch;
			break;
		case 'baseline':
			alignClass = xstackClass.align.baseline;
			break;
	}

	switch(justify) {
		case 'left':
			justifyClass = xstackClass.justify.left;
			break;
		case 'center':
			justifyClass = xstackClass.justify.center;
			break;
		case 'right':
			justifyClass = xstackClass.justify.right;
			break;
		case 'space-between':
			justifyClass = xstackClass.justify.spaceBetween;
			break;
		case 'space-around':
			justifyClass = xstackClass.justify.spaceAround;
			break;
		case 'space-evenly':
			justifyClass = xstackClass.justify.spaceEvenly;
			break;
	}

	const rootClass = clsx(xstackClass.root, alignClass, justifyClass);
	let style: React.CSSProperties | undefined = undefined;
	if(gap) {
		style = {
			[xstackClass.garVar]: gap
		}
	}

	return (
		<div className={rootClass} style={style} {...rest}>
			{children}
		</div>
	)
}
