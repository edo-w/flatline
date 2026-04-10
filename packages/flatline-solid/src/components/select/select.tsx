import clsx from 'clsx/lite';
import { splitProps, type JSX } from 'solid-js';
import { selectClass } from './class';
import './select.css';

export type SelectBaseProps = JSX.SelectHTMLAttributes<HTMLSelectElement>;

export interface SelectProps extends SelectBaseProps {}

export function Select(props: SelectProps) {
	const [local, rest] = splitProps(props, ['class', 'children', 'disabled']);

	const rootClass = () => clsx(
		selectClass.root,
		local.class
	);

	return (
		<div class={rootClass()} data-disabled={local.disabled ? '' : undefined}>
			<select class={selectClass.innerSelect} disabled={local.disabled} {...rest}>
				{local.children}
			</select>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class={selectClass.arrow}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="m6 9 6 6 6-6" />
			</svg>
		</div>
	);
}
