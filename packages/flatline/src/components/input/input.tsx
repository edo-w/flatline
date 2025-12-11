import './input.css';
import clsx from 'clsx/lite';
import { inputClass } from './classname';
import type { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
	const { className, ...rest } = props;
	const rootClass = clsx(inputClass.root, className);

	return (
		<input className={rootClass} {...rest} />
	)
}
