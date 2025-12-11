import './select.css';
import clsx from "clsx/lite";
import type { HtmlHTMLAttributes } from "react";
import { selectClass } from "./classname";

export type SelectProps = HtmlHTMLAttributes<HTMLSelectElement>;

export function Select(props: SelectProps) {
	const { children, className, ...rest } = props;
	const rootClass = clsx(selectClass.root, className);

	return (
		<select className={rootClass} {...rest}>
			{children}
		</select>
	)
}
