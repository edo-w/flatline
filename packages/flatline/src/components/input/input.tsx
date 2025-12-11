import clsx from 'clsx/lite';
import { inputClass } from './classname';
import './input.css';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
	const { className, ...rest } = props;
	const rootClass = clsx(inputClass.root, className);

	return (
		<input className={rootClass} {...rest} />
	)
}
