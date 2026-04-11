import clsx from 'clsx/lite';
import { type JSX, mergeProps, splitProps } from 'solid-js';
import { progressBarClass } from './class';
import './progress-bar.css';

export type ProgressBarBaseProps = JSX.HTMLAttributes<HTMLDivElement>;

export interface ProgressBarProps extends ProgressBarBaseProps {
	value?: number;
	max?: number;
	indeterminate?: boolean;
}

export function ProgressBar(props: ProgressBarProps) {
	const merged = mergeProps(
		{
			max: 100,
			value: 0,
			indeterminate: false,
		} as const,
		props,
	);
	const [local, rest] = splitProps(merged, ['class', 'value', 'max', 'indeterminate']);

	const clampedValue = () => Math.max(0, Math.min(local.value, local.max));
	const percent = () => {
		if (local.max <= 0) {
			return 0;
		}

		return (clampedValue() / local.max) * 100;
	};
	const rootClass = () => clsx(progressBarClass.root, local.class);

	return (
		<div
			class={rootClass()}
			role="progressbar"
			aria-valuemin={0}
			aria-valuemax={local.max}
			aria-valuenow={local.indeterminate ? undefined : clampedValue()}
			data-indeterminate={local.indeterminate ? '' : undefined}
			{...rest}
		>
			<span
				class={progressBarClass.indicator}
				style={local.indeterminate ? undefined : { width: `${percent()}%` }}
			/>
		</div>
	);
}
