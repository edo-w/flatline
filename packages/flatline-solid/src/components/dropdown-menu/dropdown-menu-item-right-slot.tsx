import clsx from 'clsx/lite';
import { splitProps } from 'solid-js';
import { dropdownMenuClass } from './class';
import type { DropdownMenuItemRightSlotProps } from './types';
import './dropdown-menu-item-right-slot.css';

export function DropdownMenuItemRightSlot(props: DropdownMenuItemRightSlotProps) {
	const [local, rest] = splitProps(props, ['class', 'children']);
	return (
		<span
			class={clsx(dropdownMenuClass.itemRightSlot, local.class)}
			{...rest}
		>
			{local.children}
		</span>
	);
}
