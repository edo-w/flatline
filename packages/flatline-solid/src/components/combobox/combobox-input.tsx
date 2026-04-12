import clsx from 'clsx/lite';
import { type JSX, splitProps } from 'solid-js';
import { comboboxClass } from './class';
import { useComboboxContext } from './context';
import type { ComboboxInputProps } from './types';
import { callEventHandler } from './util';

export function ComboboxInput(props: ComboboxInputProps) {
	const context = useComboboxContext<any, any>();
	const [local, rest] = splitProps(props, ['class', 'placeholder', 'onInput', 'onFocus', 'onKeyDown']);
	const rootClass = () => clsx(comboboxClass.input, local.class);

	const handleInput: JSX.EventHandlerUnion<HTMLInputElement, InputEvent> = (event) => {
		callEventHandler(local.onInput, event);

		if (!(event.currentTarget instanceof HTMLInputElement)) {
			return;
		}

		const input = event.currentTarget;
		const nextValue = input.value;
		const selectionStart = input.selectionStart;
		const selectionEnd = input.selectionEnd;

		context.setInputValue(nextValue);

		queueMicrotask(() => {
			if (document.activeElement !== input) {
				return;
			}

			if (input.value !== nextValue || selectionStart === null || selectionEnd === null) {
				return;
			}

			input.setSelectionRange(selectionStart, selectionEnd);
		});
	};

	const handleFocus: JSX.EventHandlerUnion<HTMLInputElement, FocusEvent> = (event) => {
		callEventHandler(local.onFocus, event);

		if (context.disabled() || context.readOnly()) {
			return;
		}
	};

	const handleKeyDown: JSX.EventHandlerUnion<HTMLInputElement, KeyboardEvent> = (event) => {
		callEventHandler(local.onKeyDown, event);

		if (context.disabled() || context.readOnly()) {
			return;
		}

		if (event.key === 'ArrowDown') {
			event.preventDefault();

			if (context.isOpen()) {
				context.highlightNext();
				return;
			}

			context.openPopup('preserve');
			return;
		}

		if (event.key === 'ArrowUp') {
			event.preventDefault();

			if (context.isOpen()) {
				context.highlightPrevious();
				return;
			}

			context.openPopup('preserve');
			return;
		}

		if (event.key === 'Enter' && context.isOpen()) {
			const activeItem = context.visibleItems().find((item) => item.key === context.highlightedKey());

			if (activeItem) {
				event.preventDefault();
				context.selectItem(activeItem);
			}

			return;
		}

		if (event.key === 'Escape') {
			const input = event.currentTarget;
			const selectionStart = input.selectionStart ?? 0;
			const selectionEnd = input.selectionEnd ?? 0;

			if (selectionStart !== selectionEnd) {
				event.preventDefault();
				input.setSelectionRange(selectionEnd, selectionEnd);
				return;
			}

			if (context.selectedItem()) {
				event.preventDefault();
				context.clearSelectedItem();
				return;
			}

			if (context.isOpen()) {
				event.preventDefault();
			}

			context.closePopup(true);
			return;
		}

		if (event.key === 'Tab') {
			context.closePopup(true);
		}
	};

	return (
		<input
			id={`${context.rootId}-input`}
			ref={context.setInputRef}
			class={rootClass()}
			type="text"
			role="combobox"
			value={context.inputValue()}
			placeholder={local.placeholder ?? context.placeholder()}
			disabled={context.disabled()}
			readOnly={context.readOnly()}
			required={context.required()}
			aria-autocomplete="list"
			aria-expanded={context.isOpen()}
			aria-controls={context.isOpen() ? `${context.rootId}-listbox` : undefined}
			aria-activedescendant={context.highlightedKey() ? context.getItemId(context.highlightedKey()!) : undefined}
			onInput={handleInput}
			onFocus={handleFocus}
			onKeyDown={handleKeyDown}
			{...rest}
		/>
	);
}
