import clsx from 'clsx/lite';
import { For, Show, splitProps } from 'solid-js';
import { useComboboxContext } from './context';
import { ComboboxGroup } from './combobox-group';
import { ComboboxItem } from './combobox-item';
import { ComboboxItemIndicator } from './combobox-item-indicator';
import { ComboboxItemLabel } from './combobox-item-label';
import { comboboxClass } from './class';
import type { ComboboxListboxProps, ComboboxRenderGroupProps, ComboboxRenderItemProps } from './types';

function DefaultItemComponent<TOption>(props: ComboboxRenderItemProps<TOption>) {
	return (
		<ComboboxItem item={props.item}>
			<ComboboxItemLabel>{props.item.textValue}</ComboboxItemLabel>
			<ComboboxItemIndicator />
		</ComboboxItem>
	);
}

function DefaultGroupComponent<TOptionGroup>(props: ComboboxRenderGroupProps<TOptionGroup>) {
	return <ComboboxGroup>{props.group.textValue}</ComboboxGroup>;
}

export function ComboboxListbox<TOption = any, TOptionGroup = never>(props: ComboboxListboxProps) {
	const context = useComboboxContext<TOption, TOptionGroup>();
	const [local, rest] = splitProps(props, ['class', 'children']);
	const rootClass = () => clsx(comboboxClass.listbox, local.class);
	const ItemComponent = () => context.itemComponent ?? DefaultItemComponent<TOption>;
	const GroupComponent = () => context.groupComponent ?? DefaultGroupComponent<TOptionGroup>;

	return (
		<ul
			id={`${context.rootId}-listbox`}
			class={rootClass()}
			role="listbox"
			{...rest}
		>
			{local.children ?? (
				<For each={context.visibleGroups()}>
					{(group) => {
						const GroupRenderer = GroupComponent();
						const ItemRenderer = ItemComponent();

						return (
							<>
								<Show when={group.rawValue !== undefined}>
									<GroupRenderer group={group} />
								</Show>
								<For each={group.items}>{(item) => <ItemRenderer item={item} />}</For>
							</>
						);
					}}
				</For>
			)}
		</ul>
	);
}
