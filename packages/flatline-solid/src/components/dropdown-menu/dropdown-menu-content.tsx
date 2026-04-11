import clsx from 'clsx/lite';
import { DropdownMenu as KDropdownMenu } from '@kobalte/core/dropdown-menu';
import { splitProps } from 'solid-js';
import { dropdownMenuClass } from './class';
import type { DropdownMenuContentProps } from './types';
import './dropdown-menu-content.css';

export function DropdownMenuContent(props: DropdownMenuContentProps) {
	const [local, rest] = splitProps(props, ['class']);
	return (
		<KDropdownMenu.Content
			class={clsx(dropdownMenuClass.content, local.class)}
			{...rest}
		/>
	);
}
