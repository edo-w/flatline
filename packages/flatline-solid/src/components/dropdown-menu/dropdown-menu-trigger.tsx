import clsx from 'clsx/lite';
import { DropdownMenu as KDropdownMenu } from '@kobalte/core/dropdown-menu';
import { Button } from '../button';
import { mergeProps, splitProps } from 'solid-js';
import { dropdownMenuClass } from './class';
import type { DropdownMenuTriggerProps } from './types';
import './dropdown-menu-trigger.css';

export function DropdownMenuTrigger(props: DropdownMenuTriggerProps) {
	const merged = mergeProps(
		{
			type: 'button',
			variant: 'solid',
			color: 'primary',
		} as const,
		props,
	);
	const [local, rest] = splitProps(merged, ['class']);

	return (
		<KDropdownMenu.Trigger
			as={Button}
			class={clsx(dropdownMenuClass.trigger, local.class)}
			{...rest}
		/>
	);
}
