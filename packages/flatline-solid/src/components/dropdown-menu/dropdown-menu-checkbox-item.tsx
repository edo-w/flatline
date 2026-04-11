import { DropdownMenu as KDropdownMenu } from '@kobalte/core/dropdown-menu';
import clsx from 'clsx/lite';
import { splitProps } from 'solid-js';
import { dropdownMenuClass } from './class';
import type { DropdownMenuCheckboxItemProps } from './types';
import './dropdown-menu-checkbox-item.css';

export function DropdownMenuCheckboxItem(props: DropdownMenuCheckboxItemProps) {
	const [local, rest] = splitProps(props, ['class']);
	return (
		<KDropdownMenu.CheckboxItem
			class={clsx(dropdownMenuClass.checkboxItem, local.class)}
			{...rest}
		/>
	);
}
