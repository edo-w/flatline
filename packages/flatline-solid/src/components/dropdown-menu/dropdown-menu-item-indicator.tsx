import clsx from 'clsx/lite';
import { DropdownMenu as KDropdownMenu } from '@kobalte/core/dropdown-menu';
import { splitProps } from 'solid-js';
import { dropdownMenuClass } from './class';
import type { DropdownMenuItemIndicatorProps } from './types';
import './dropdown-menu-item-indicator.css';

export function DropdownMenuItemIndicator(props: DropdownMenuItemIndicatorProps) {
	const [local, rest] = splitProps(props, ['class']);
	return (
		<KDropdownMenu.ItemIndicator
			class={clsx(dropdownMenuClass.itemIndicator, local.class)}
			{...rest}
		/>
	);
}
