import { splitProps } from 'solid-js';
import type { IconProps } from './types';

export function CheckIcon(props: IconProps) {
	const [local, rest] = splitProps(props, ['w', 'h']);

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			{...rest}
			width={local.w ?? '1rem'}
			height={local.h ?? '1rem'}
		>
			<path d="M20 6 9 17l-5-5" />
		</svg>
	);
}
