import clsx from 'clsx/lite';
import { splitProps } from 'solid-js';
import { comboboxClass } from './class';
import type { ComboboxGroupProps } from './types';

export function ComboboxGroup<TOptionGroup = any, TOption = any>(props: ComboboxGroupProps<TOptionGroup, TOption>) {
	const [local, rest] = splitProps(props, ['class', 'group', 'children']);
	const rootClass = () => clsx(comboboxClass.group, local.class);

	return (
		<li class={rootClass()} role="presentation" {...rest}>
			<hr aria-hidden="true" />
			<span>{local.children ?? local.group?.textValue}</span>
		</li>
	);
}
