import clsx from 'clsx/lite';
import { DropdownMenu as KDropdownMenu } from '@kobalte/core/dropdown-menu';
import { splitProps } from 'solid-js';
import { dropdownMenuClass } from './class';
import type { DropdownMenuGroupLabelProps } from './types';
import './dropdown-menu-group-label.css';

export function DropdownMenuGroupLabel(props: DropdownMenuGroupLabelProps) {
	const [local, rest] = splitProps(props, ['class']);
	return (
		<KDropdownMenu.GroupLabel
			class={clsx(dropdownMenuClass.groupLabel, local.class)}
			{...rest}
		/>
	);
}
