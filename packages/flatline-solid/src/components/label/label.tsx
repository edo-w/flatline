import clsx from 'clsx/lite';
import { type JSX, splitProps } from 'solid-js';
import { labelClass } from './class';
import './label.css';

export type LabelBaseProps = JSX.LabelHTMLAttributes<HTMLLabelElement>;

export interface LabelProps extends LabelBaseProps {}

export function Label(props: LabelProps) {
	const [local, rest] = splitProps(props, ['class', 'children']);

	const rootClass = () => clsx(labelClass.root, local.class);

	return (
		<label
			class={rootClass()}
			{...rest}
		>
			{local.children}
		</label>
	);
}
