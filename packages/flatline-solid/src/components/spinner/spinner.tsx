import clsx from 'clsx/lite';
import { mergeProps, splitProps, type JSX } from 'solid-js';
import { spinnerClass, type SpinnerSize } from './class';
import './spinner.css';

export type SpinnerBaseProps = JSX.HTMLAttributes<HTMLSpanElement>;

export interface SpinnerProps extends SpinnerBaseProps {
	size?: SpinnerSize;
	label?: string;
}

export function Spinner(props: SpinnerProps) {
	const merged = mergeProps(
		{
			size: 'md',
			label: 'Loading',
		} as const,
		props,
	);
	const [local, rest] = splitProps(merged, ['class', 'size', 'label']);

	const rootClass = () => {
		const sizeClass = spinnerClass.size[local.size];

		return clsx(spinnerClass.root, sizeClass, local.class);
	};

	return (
		<span
			class={rootClass()}
			role="status"
			aria-label={local.label}
			{...rest}
		>
			<svg
				class={spinnerClass.svg}
				viewBox="0 0 24 24"
				fill="none"
				aria-hidden="true"
			>
				<circle
					cx="12"
					cy="12"
					r="9"
					stroke="currentColor"
					stroke-width="2"
				/>
				<path
					d="M12 3a9 9 0 0 1 9 9"
					stroke="currentColor"
					stroke-width="2"
				/>
			</svg>
		</span>
	);
}
