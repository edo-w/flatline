import clsx from 'clsx/lite';
import { type JSX, splitProps } from 'solid-js';
import { comboboxClass } from './class';
import { ComboboxItemContext, useComboboxContext } from './context';
import type { ComboboxItemProps } from './types';
import { callEventHandler } from './util';

export function ComboboxItem<TOption = any>(props: ComboboxItemProps<TOption>) {
	const context = useComboboxContext<TOption, any>();
	const [local, rest] = splitProps(props, ['class', 'item', 'children', 'onMouseEnter', 'onMouseDown', 'onClick']);
	const rootClass = () => clsx(comboboxClass.item, local.class);
	const selected = () => context.selectedItem()?.key === local.item.key;
	const highlighted = () => context.highlightedKey() === local.item.key;

	const handleMouseEnter: JSX.EventHandlerUnion<HTMLLIElement, MouseEvent> = (event) => {
		callEventHandler(local.onMouseEnter, event);
		context.setHighlightedKey(local.item.key);
	};

	const handleMouseDown: JSX.EventHandlerUnion<HTMLLIElement, MouseEvent> = (event) => {
		callEventHandler(local.onMouseDown, event);
		event.preventDefault();
	};

	const handleClick: JSX.EventHandlerUnion<HTMLLIElement, MouseEvent> = (event) => {
		callEventHandler(local.onClick, event);
		context.selectItem(local.item);
	};

	return (
		<ComboboxItemContext.Provider value={{ item: local.item, selected: selected(), highlighted: highlighted() }}>
			<li
				id={context.getItemId(local.item.key)}
				class={rootClass()}
				role="option"
				aria-selected={selected()}
				data-selected={selected() ? '' : undefined}
				data-highlighted={highlighted() ? '' : undefined}
				data-disabled={local.item.disabled ? '' : undefined}
				onMouseEnter={handleMouseEnter}
				onMouseDown={handleMouseDown}
				onClick={handleClick}
				{...rest}
			>
				{local.children}
			</li>
		</ComboboxItemContext.Provider>
	);
}
