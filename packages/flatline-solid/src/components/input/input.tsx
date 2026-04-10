import clsx from 'clsx/lite';
import { splitProps, type JSX } from 'solid-js';
import { inputClass } from './class';
import './input.css';

export type InputBaseProps = JSX.InputHTMLAttributes<HTMLInputElement>;

export interface InputProps extends InputBaseProps {}

export function Input(props: InputProps) {
	const [local, rest] = splitProps(props, ['class', 'children']);

	const rootClass = () => clsx(
		inputClass.root,
		local.class
	);

	return (
		<input class={rootClass()} {...rest} />
	);
}
