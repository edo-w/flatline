import clsx from 'clsx/lite';
import { DropdownMenu as KDropdownMenu } from '@kobalte/core/dropdown-menu';
import { splitProps } from 'solid-js';
import { dropdownMenuClass } from './class';
import type { DropdownMenuRadioItemProps } from './types';
import './dropdown-menu-radio-item.css';

export function DropdownMenuRadioItem(props: DropdownMenuRadioItemProps) {
	const [local, rest] = splitProps(props, ['class']);
	return (
		<KDropdownMenu.RadioItem
			class={clsx(dropdownMenuClass.radioItem, local.class)}
			{...rest}
		/>
	);
}
