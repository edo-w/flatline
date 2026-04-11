import clsx from 'clsx/lite';
import { splitProps, type JSX } from 'solid-js';
import { textAreaClass } from './class';
import './textarea.css';

export type TextAreaBaseProps = JSX.TextareaHTMLAttributes<HTMLTextAreaElement>;

export interface TextAreaProps extends TextAreaBaseProps {}

export function TextArea(props: TextAreaProps) {
	const [local, rest] = splitProps(props, ['class']);

	const rootClass = () => clsx(textAreaClass.root, local.class);

	return (
		<textarea
			class={rootClass()}
			{...rest}
		/>
	);
}
