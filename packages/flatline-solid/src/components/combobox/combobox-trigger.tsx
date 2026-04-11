import clsx from 'clsx/lite';
import { mergeProps, splitProps, type JSX } from 'solid-js';
import { useComboboxContext } from './context';
import { ComboboxIcon } from './combobox-icon';
import { comboboxClass } from './class';
import type { ComboboxTriggerProps } from './types';
import { callEventHandler } from './util';

export function ComboboxTrigger(props: ComboboxTriggerProps) {
	const context = useComboboxContext<any, any>();
	const merged = mergeProps(
		{
			tabIndex: -1,
		},
		props,
	);
	const [local, rest] = splitProps(merged, ['class', 'children', 'onMouseDown', 'onClick']);
	const rootClass = () => clsx(comboboxClass.trigger, local.class);

	const handleMouseDown: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent> = (event) => {
		callEventHandler(local.onMouseDown, event);
		event.preventDefault();
	};

	const handleClick: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent> = (event) => {
		callEventHandler(local.onClick, event);

		if (context.disabled() || context.readOnly()) {
			return;
		}

		context.openPopup('preserve');
		context.inputRef()?.focus();
	};

	return (
		<button
			type="button"
			class={rootClass()}
			onMouseDown={handleMouseDown}
			onClick={handleClick}
			{...rest}
		>
			{local.children ?? <ComboboxIcon />}
		</button>
	);
}
