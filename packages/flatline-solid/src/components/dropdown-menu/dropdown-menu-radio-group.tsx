import { DropdownMenu as KDropdownMenu } from '@kobalte/core/dropdown-menu';
import { splitProps } from 'solid-js';
import type { DropdownMenuRadioGroupProps } from './types';

export function DropdownMenuRadioGroup(props: DropdownMenuRadioGroupProps) {
	const [local, rest] = splitProps(props, ['class']);
	return (
		<KDropdownMenu.RadioGroup
			class={local.class}
			{...rest}
		/>
	);
}
