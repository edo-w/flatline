import clsx from 'clsx/lite';
import { type JSX, splitProps } from 'solid-js';
import { type YStackAlign, ystackClass } from './class';
import './ystack.css';

export type YStackBaseProps = JSX.HTMLAttributes<HTMLDivElement>;

export interface YStackProps extends YStackBaseProps {
	gap?: number | string;
	align?: YStackAlign;
}

export function YStack(props: YStackProps) {
	const [local, rest] = splitProps(props, ['class', 'children', 'gap', 'align']);

	const rootClass = () => {
		const alignClass = local.align ? ystackClass.align[local.align] : undefined;

		return clsx(ystackClass.root, alignClass, local.class);
	};

	return (
		<div
			class={rootClass()}
			style={{ [ystackClass.gapVar]: local.gap }}
			{...rest}
		>
			{local.children}
		</div>
	);
}
