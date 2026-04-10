import clsx from 'clsx/lite';
import { splitProps, type JSX } from 'solid-js';
import { ystackClass, type YStackAlign } from './class';
import './ystack.css';

export type YStackBaseProps = JSX.HTMLAttributes<HTMLDivElement>;

export interface YStackProps extends YStackBaseProps {
	gap?: number | string;
	align?: YStackAlign;
}

export function YStack(props: YStackProps) {
	const [local, rest] = splitProps(props, ['class', 'children', 'gap', 'align']);

	const rootClass = () => clsx(
		ystackClass.root,
		local.align ? ystackClass.align[local.align] : undefined,
		local.class
	);

	return (
		<div class={rootClass()} style={{ [ystackClass.gapVar]: local.gap }} {...rest}>
			{local.children}
		</div>
	);
}
