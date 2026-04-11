import clsx from 'clsx/lite';
import { DropdownMenu as KDropdownMenu } from '@kobalte/core/dropdown-menu';
import { splitProps } from 'solid-js';
import { dropdownMenuClass } from './class';
import type { DropdownMenuIconProps } from './types';
import './dropdown-menu-icon.css';

export function DropdownMenuIcon(props: DropdownMenuIconProps) {
	const [local, rest] = splitProps(props, ['class']);
	return (
		<KDropdownMenu.Icon
			class={clsx(dropdownMenuClass.icon, local.class)}
			{...rest}
		/>
	);
}
