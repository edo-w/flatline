import { DropdownMenu as KDropdownMenu } from '@kobalte/core/dropdown-menu';
import { splitProps } from 'solid-js';
import type { DropdownMenuGroupProps } from './types';

export function DropdownMenuGroup(props: DropdownMenuGroupProps) {
	const [local, rest] = splitProps(props, ['class']);
	return (
		<KDropdownMenu.Group
			class={local.class}
			{...rest}
		/>
	);
}
