import clsx from 'clsx/lite';
import { splitProps } from 'solid-js';
import { useComboboxItemContext } from './context';
import { comboboxClass } from './class';
import type { ComboboxItemLabelProps } from './types';

export function ComboboxItemLabel(props: ComboboxItemLabelProps) {
	const item = useComboboxItemContext<any>();
	const [local, rest] = splitProps(props, ['class', 'children']);
	const rootClass = () => clsx(comboboxClass.itemLabel, local.class);

	return <div class={rootClass()} {...rest}>{local.children ?? item.item.textValue}</div>;
}
