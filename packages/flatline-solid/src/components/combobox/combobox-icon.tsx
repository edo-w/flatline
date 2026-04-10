import clsx from 'clsx/lite';
import { splitProps } from 'solid-js';
import { ChevronDownIcon } from '#src/icons';
import { comboboxClass } from './class';
import type { ComboboxIconProps } from './types';

export function ComboboxIcon(props: ComboboxIconProps) {
	const [local, rest] = splitProps(props, ['class', 'children']);
	const rootClass = () => clsx(comboboxClass.icon, local.class);

	return <span class={rootClass()} {...rest}>{local.children ?? <ChevronDownIcon />}</span>;
}
