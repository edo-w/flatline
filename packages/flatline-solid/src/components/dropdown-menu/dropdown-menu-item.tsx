import clsx from 'clsx/lite';
import { DropdownMenu as KDropdownMenu } from '@kobalte/core/dropdown-menu';
import { splitProps } from 'solid-js';
import { dropdownMenuClass } from './class';
import type { DropdownMenuItemProps } from './types';
import './dropdown-menu-item.css';

export function DropdownMenuItem(props: DropdownMenuItemProps) {
	const [local, rest] = splitProps(props, ['class']);
	return (
		<KDropdownMenu.Item
			class={clsx(dropdownMenuClass.item, local.class)}
			{...rest}
		/>
	);
}
