import clsx from 'clsx/lite';
import { DropdownMenu as KDropdownMenu } from '@kobalte/core/dropdown-menu';
import { splitProps } from 'solid-js';
import { dropdownMenuClass } from './class';
import type { DropdownMenuSubContentProps } from './types';
import './dropdown-menu-sub-content.css';

export function DropdownMenuSubContent(props: DropdownMenuSubContentProps) {
	const [local, rest] = splitProps(props, ['class']);
	return (
		<KDropdownMenu.SubContent
			class={clsx(dropdownMenuClass.subContent, local.class)}
			{...rest}
		/>
	);
}
