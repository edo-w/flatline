import clsx from 'clsx/lite';
import { splitProps, type JSX } from 'solid-js';
import { xstackClass, type XStackAlign } from './class';
import './xstack.css';

export type XStackBaseProps = JSX.HTMLAttributes<HTMLDivElement>;

export interface XStackProps extends XStackBaseProps {
	gap?: number | string;
	align?: XStackAlign;
}

export function XStack(props: XStackProps) {
	const [local, rest] = splitProps(props, ['class', 'children', 'gap', 'align']);

	const rootClass = () => {
		const alignClass = local.align ? xstackClass.align[local.align] : undefined;

		return clsx(xstackClass.root, alignClass, local.class);
	};

	return (
		<div
			class={rootClass()}
			style={{ [xstackClass.garVar]: local.gap }}
			{...rest}
		>
			{local.children}
		</div>
	);
}
