import { splitProps } from 'solid-js';
import type { IconProps } from './types';

export function DotFilledIcon(props: IconProps) {
	const [local, rest] = splitProps(props, ['w', 'h']);

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			{...rest}
			width={local.w ?? '1rem'}
			height={local.h ?? '1rem'}
		>
			<circle
				cx="12"
				cy="12"
				r="5"
			/>
		</svg>
	);
}
