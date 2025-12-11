import './select.css';
import clsx from "clsx/lite";
import type { SelectHTMLAttributes } from "react";
import { selectClass } from "./classname";

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export function Select(props: SelectProps) {
	const { children, className, disabled, ...rest } = props;
	const rootClass = clsx(selectClass.root, className);
	const dataDisabled = disabled ? '' : undefined;

	return (
		<div className={rootClass} data-disabled={dataDisabled}>
			<select className={selectClass.select} disabled={disabled} {...rest}>
				{children}
			</select>
			<svg xmlns="http://www.w3.org/2000/svg" className={selectClass.arrow}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round">
					<path d="m6 9 6 6 6-6"/>
			</svg>
		</div>
	)
}
