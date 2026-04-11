import clsx from 'clsx/lite';
import { Show, splitProps } from 'solid-js';
import { CheckIcon } from '#src/icons';
import { comboboxClass } from './class';
import { useComboboxItemContext } from './context';
import type { ComboboxItemIndicatorProps } from './types';

export function ComboboxItemIndicator(props: ComboboxItemIndicatorProps) {
	const item = useComboboxItemContext<any>();
	const [local, rest] = splitProps(props, ['class', 'children']);
	const rootClass = () => clsx(comboboxClass.itemIndicator, local.class);

	return (
		<Show when={item.selected}>
			<div
				class={rootClass()}
				{...rest}
			>
				{local.children ?? <CheckIcon />}
			</div>
		</Show>
	);
}
