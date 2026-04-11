import clsx from 'clsx/lite';
import { type JSX, splitProps } from 'solid-js';
import { comboboxClass } from './class';
import { useComboboxContext } from './context';
import type { ComboboxControlProps } from './types';
import { callEventHandler } from './util';

export function ComboboxControl(props: ComboboxControlProps) {
	const context = useComboboxContext<any, any>();
	const [local, rest] = splitProps(props, ['class', 'onMouseDown']);
	const rootClass = () => clsx(comboboxClass.control, local.class);

	const handleMouseDown: JSX.EventHandlerUnion<HTMLDivElement, MouseEvent> = (event) => {
		callEventHandler(local.onMouseDown, event);

		if (context.disabled() || context.readOnly()) {
			return;
		}

		context.openPopup('preserve');
	};

	return (
		<div
			class={rootClass()}
			data-disabled={context.disabled() ? '' : undefined}
			onMouseDown={handleMouseDown}
			{...rest}
		/>
	);
}
