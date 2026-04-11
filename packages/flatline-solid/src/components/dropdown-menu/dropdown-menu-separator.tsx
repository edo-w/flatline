import clsx from 'clsx/lite';
import { DropdownMenu as KDropdownMenu } from '@kobalte/core/dropdown-menu';
import { splitProps } from 'solid-js';
import { dropdownMenuClass } from './class';
import type { DropdownMenuSeparatorProps } from './types';
import './dropdown-menu-separator.css';

export function DropdownMenuSeparator(props: DropdownMenuSeparatorProps) {
	const [local, rest] = splitProps(props, ['class']);
	return (
		<KDropdownMenu.Separator
			class={clsx(dropdownMenuClass.separator, local.class)}
			{...rest}
		/>
	);
}
