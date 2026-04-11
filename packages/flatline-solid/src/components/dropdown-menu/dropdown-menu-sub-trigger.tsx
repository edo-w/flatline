import { DropdownMenu as KDropdownMenu } from '@kobalte/core/dropdown-menu';
import clsx from 'clsx/lite';
import { splitProps } from 'solid-js';
import { dropdownMenuClass } from './class';
import type { DropdownMenuSubTriggerProps } from './types';
import './dropdown-menu-sub-trigger.css';

export function DropdownMenuSubTrigger(props: DropdownMenuSubTriggerProps) {
	const [local, rest] = splitProps(props, ['class']);
	return (
		<KDropdownMenu.SubTrigger
			class={clsx(dropdownMenuClass.subTrigger, local.class)}
			{...rest}
		/>
	);
}
