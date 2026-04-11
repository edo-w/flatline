import { DropdownMenu as KDropdownMenu } from '@kobalte/core/dropdown-menu';
import clsx from 'clsx/lite';
import { splitProps } from 'solid-js';
import { dropdownMenuClass } from './class';
import type { DropdownMenuArrowProps } from './types';
import './dropdown-menu-arrow.css';

export function DropdownMenuArrow(props: DropdownMenuArrowProps) {
	const [local, rest] = splitProps(props, ['class']);
	return (
		<KDropdownMenu.Arrow
			class={clsx(dropdownMenuClass.arrow, local.class)}
			size={8}
			{...rest}
		/>
	);
}
