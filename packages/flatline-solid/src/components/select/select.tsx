import clsx from 'clsx/lite';
import { splitProps, type JSX } from 'solid-js';
import { ChevronDownIcon } from '#src/icons';
import { selectClass } from './class';
import './select.css';

export type SelectBaseProps = JSX.SelectHTMLAttributes<HTMLSelectElement>;

export interface SelectProps extends SelectBaseProps {}

export function Select(props: SelectProps) {
	const [local, rest] = splitProps(props, ['class', 'children', 'disabled']);

	const rootClass = () => clsx(selectClass.root, local.class);

	return (
		<div
			class={rootClass()}
			data-disabled={local.disabled ? '' : undefined}
		>
			<select
				class={selectClass.innerSelect}
				disabled={local.disabled}
				{...rest}
			>
				{local.children}
			</select>
			<ChevronDownIcon class={selectClass.arrow} />
		</div>
	);
}
