import clsx from 'clsx/lite';
import { Show, splitProps } from 'solid-js';
import { useComboboxContext } from './context';
import { comboboxClass } from './class';
import type { ComboboxContentProps } from './types';

export function ComboboxContent(props: ComboboxContentProps) {
	const context = useComboboxContext<any, any>();
	const [local, rest] = splitProps(props, ['class', 'children']);
	const rootClass = () => clsx(comboboxClass.content, local.class);

	return (
		<Show when={context.isOpen()}>
			<div class={rootClass()} {...rest}>{local.children}</div>
		</Show>
	);
}
