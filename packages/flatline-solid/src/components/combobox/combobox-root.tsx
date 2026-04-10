import clsx from 'clsx/lite';
import {
	children,
	createEffect,
	createMemo,
	createSignal,
	createUniqueId,
	mergeProps,
	onCleanup,
	onMount,
	splitProps,
	type JSX
} from 'solid-js';
import { ComboboxContext, type ComboboxContextValue } from './context';
import { ComboboxContent } from './combobox-content';
import { ComboboxControl } from './combobox-control';
import { ComboboxInput } from './combobox-input';
import { ComboboxListbox } from './combobox-listbox';
import { ComboboxPortal } from './combobox-portal';
import { ComboboxTrigger } from './combobox-trigger';
import { comboboxClass } from './class';
import type { ComboboxGroupData, ComboboxItemData, ComboboxRootProps } from './types';
import { callEventHandler, createContainsFilter, defaultTextValue, resolveAccessor, resolveGroupChildren } from './util';

export function ComboboxRoot<TOption, TOptionGroup = never>(props: ComboboxRootProps<TOption, TOptionGroup>) {
	const merged = mergeProps({
		closeOnSelection: true,
	}, props);

	const [local, rest] = splitProps(merged, [
		'class',
		'children',
		'options',
		'optionValue',
		'optionTextValue',
		'optionLabel',
		'optionDisabled',
		'optionGroupChildren',
		'itemComponent',
		'groupComponent',
		'placeholder',
		'value',
		'defaultValue',
		'inputValue',
		'defaultInputValue',
		'onChange',
		'onInputChange',
		'open',
		'defaultOpen',
		'onOpenChange',
		'disabled',
		'readOnly',
		'required',
		'name',
		'closeOnSelection',
		'onFocusOut'
	]);
	const resolvedChildren = children(() => local.children);

	const rootId = createUniqueId();
	const [rootRef, setRootRef] = createSignal<HTMLDivElement>();
	const [inputRef, setInputRef] = createSignal<HTMLInputElement>();
	const [internalValue, setInternalValue] = createSignal<TOption | null>(local.defaultValue ?? null);
	const [internalOpen, setInternalOpen] = createSignal(Boolean(local.defaultOpen));
	const [internalInputValue, setInternalInputValue] = createSignal(local.defaultInputValue ?? '');
	const [filterValue, setFilterValue] = createSignal('');
	const [highlightedKey, setHighlightedKey] = createSignal<string | null>(null);
	const isControlledValue = () => local.value !== undefined;
	const isControlledInputValue = () => local.inputValue !== undefined;
	const isControlledOpen = () => local.open !== undefined;
	const filter = createMemo(() => createContainsFilter<TOption>());
	const inputValue = createMemo(() => (isControlledInputValue() ? local.inputValue ?? '' : internalInputValue()));

	const normalizedGroups = createMemo<Array<ComboboxGroupData<TOptionGroup, TOption>>>(() => {
		const groups: Array<ComboboxGroupData<TOptionGroup, TOption>> = [];
		const looseItems: ComboboxItemData<TOption>[] = [];
		let itemIndex = 0;

		for (let index = 0; index < local.options.length; index += 1) {
			const entry = local.options[index] as TOption | TOptionGroup;
			const groupChildren = resolveGroupChildren(entry as TOptionGroup, local.optionGroupChildren);

			if (groupChildren !== undefined) {
				const groupItems = groupChildren.map((option) => {
					const value = String(resolveAccessor(option, local.optionValue, defaultTextValue));
					const label = resolveAccessor(option, local.optionLabel, defaultTextValue);
					const textValue = resolveAccessor(option, local.optionTextValue, () => label);
					const disabled = Boolean(resolveAccessor(option, local.optionDisabled, () => false));
					const item = {
						key: `${value}-${itemIndex}`,
						value,
						label,
						textValue,
						disabled,
						rawValue: option,
					};

					itemIndex += 1;

					return item;
				});

				groups.push({
					key: `group-${index}`,
					textValue: defaultTextValue(entry),
					rawValue: entry as TOptionGroup,
					items: groupItems
				});

				continue;
			}

			const option = entry as TOption;
			const value = String(resolveAccessor(option, local.optionValue, defaultTextValue));
			const label = resolveAccessor(option, local.optionLabel, defaultTextValue);
			const textValue = resolveAccessor(option, local.optionTextValue, () => label);
			const disabled = Boolean(resolveAccessor(option, local.optionDisabled, () => false));

			looseItems.push({
				key: `${value}-${itemIndex}`,
				value,
				label,
				textValue,
				disabled,
				rawValue: option
			});

			itemIndex += 1;
		}

		if (looseItems.length > 0) {
			groups.unshift({
				key: 'group-root',
				textValue: '',
				items: looseItems
			});
		}

		return groups;
	});

	const allItems = createMemo(() => normalizedGroups().flatMap((group) => group.items));

	const selectedItem = createMemo(() => {
		const selectedOption = isControlledValue() ? local.value ?? null : internalValue();

		if (selectedOption == null) {
			return null;
		}

		const selectedValue = String(
			resolveAccessor<TOption, string | number>(
				selectedOption as TOption,
				local.optionValue,
				defaultTextValue as (value: TOption) => string | number
			)
		);

		return allItems().find((item) => item.value === selectedValue) ?? null;
	});

	const visibleGroups = createMemo(() => {
		const currentInput = filterValue().trim();

		return normalizedGroups()
			.map((group) => ({
				...group,
				items: group.items.filter((item) => filter()(item.rawValue, currentInput))
			}))
			.filter((group) => group.items.length > 0);
	});

	const visibleItems = createMemo(() => visibleGroups().flatMap((group) => group.items));
	const isOpen = createMemo(() => (isControlledOpen() ? Boolean(local.open) : internalOpen()) && visibleItems().length > 0);

	const setOpen = (value: boolean) => {
		if (!isControlledOpen()) {
			setInternalOpen(value);
		}

		local.onOpenChange?.(value);
	};

	const setSelectedOption = (value: TOption | null) => {
		if (!isControlledValue()) {
			setInternalValue(() => value);
		}

		local.onChange?.(value);
	};

	const setDisplayedInputValue = (value: string, emitChange = false) => {
		if (!isControlledInputValue()) {
			setInternalInputValue(value);
		}

		if (emitChange) {
			local.onInputChange?.(value);
		}
	};

	const restoreInputFromSelection = () => {
		setDisplayedInputValue(selectedItem()?.label ?? '');
		setFilterValue('');
	};

	const highlightByIndex = (index: number) => {
		const items = visibleItems();

		if (items.length === 0) {
			setHighlightedKey(null);
			return;
		}

		const boundedIndex = (index + items.length) % items.length;
		setHighlightedKey(items[boundedIndex]?.key ?? null);
	};

	const highlightFirst = () => highlightByIndex(0);
	const highlightLast = () => highlightByIndex(visibleItems().length - 1);

	const highlightNext = () => {
		const items = visibleItems();
		const index = items.findIndex((item) => item.key === highlightedKey());
		highlightByIndex(index >= 0 ? index + 1 : 0);
	};

	const highlightPrevious = () => {
		const items = visibleItems();
		const index = items.findIndex((item) => item.key === highlightedKey());
		highlightByIndex(index >= 0 ? index - 1 : items.length - 1);
	};

	const openPopup = (strategy: 'first' | 'last' | 'preserve' = 'first') => {
		if (local.disabled || local.readOnly || visibleItems().length === 0) {
			return;
		}

		setOpen(true);

		if (strategy === 'last') {
			highlightLast();
			return;
		}

		if (strategy === 'preserve') {
			if (highlightedKey() !== null) {
				return;
			}

			if (selectedItem()) {
				setHighlightedKey(selectedItem()!.key);
				return;
			}
		}

		highlightFirst();
	};

	const closePopup = (restoreInput = true) => {
		setOpen(false);
		setHighlightedKey(null);

		if (restoreInput) {
			restoreInputFromSelection();
		}
	};

	const selectItem = (item: ComboboxItemData<TOption>) => {
		if (item.disabled) {
			return;
		}

		setSelectedOption(item.rawValue);
		setDisplayedInputValue(item.label);
		setFilterValue('');
		setHighlightedKey(item.key);

		if (local.closeOnSelection) {
			setOpen(false);
		}

		inputRef()?.focus();
	};

	const clearPendingInput = () => {
		if (selectedItem() === null) {
			setDisplayedInputValue('');
			setFilterValue('');
			return;
		}

		restoreInputFromSelection();
	};

	const clearSelectedItem = () => {
		setSelectedOption(null);
		setDisplayedInputValue('');
		setFilterValue('');
		setHighlightedKey(null);
		setOpen(false);
		inputRef()?.focus();
	};

	createEffect(() => {
		if (isControlledValue() && selectedItem() !== null) {
			restoreInputFromSelection();
		}
	});

	createEffect(() => {
		const items = visibleItems();
		const selected = selectedItem();

		if (items.length === 0) {
			setHighlightedKey(null);
			setOpen(false);
			return;
		}

		if (highlightedKey() && items.some((item) => item.key === highlightedKey())) {
			return;
		}

		if (isOpen()) {
			if (selected && items.some((item) => item.key === selected.key)) {
				setHighlightedKey(selected.key);
				return;
			}

			highlightFirst();
		}
	});

	onMount(() => {
		restoreInputFromSelection();

		const handlePointerDown = (event: PointerEvent) => {
			const root = rootRef();

			if (!root || root.contains(event.target as Node)) {
				return;
			}

			closePopup(true);
		};

		document.addEventListener('pointerdown', handlePointerDown);

		onCleanup(() => {
			document.removeEventListener('pointerdown', handlePointerDown);
		});
	});

	const context: ComboboxContextValue<TOption, TOptionGroup> = {
		rootId,
		rootRef,
		setRootRef,
		inputRef,
		setInputRef,
		inputValue,
		setInputValue: (value) => {
			setDisplayedInputValue(value, true);
			setFilterValue(value);

			if (selectedItem() && value !== selectedItem()!.label) {
				setSelectedOption(null);
			}

			if (value.trim() === '') {
				closePopup(false);
				return;
			}

			openPopup('first');
		},
		isOpen,
		openPopup,
		closePopup,
		togglePopup: () => {
			if (isOpen()) {
				closePopup(true);
				return;
			}

			openPopup('first');
		},
		visibleGroups,
		visibleItems,
		selectedItem,
		highlightedKey,
		setHighlightedKey,
		highlightNext,
		highlightPrevious,
		highlightFirst,
		highlightLast,
		selectItem,
		getItemId: (key) => `${rootId}-item-${key}`,
		itemComponent: local.itemComponent,
		groupComponent: local.groupComponent,
		placeholder: () => local.placeholder,
		disabled: () => Boolean(local.disabled),
		readOnly: () => Boolean(local.readOnly),
		required: () => Boolean(local.required),
		name: () => local.name,
		clearPendingInput,
		clearSelectedItem
	};

	const rootClass = () => clsx(comboboxClass.root, local.class);

	const handleFocusOut: JSX.FocusEventHandlerUnion<HTMLDivElement, FocusEvent> = (event) => {
		callEventHandler(local.onFocusOut, event);

		const nextTarget = event.relatedTarget as Node | null;

		if (nextTarget && rootRef()?.contains(nextTarget)) {
			return;
		}

		queueMicrotask(() => {
			const activeElement = document.activeElement;

			if (activeElement instanceof Node && rootRef()?.contains(activeElement)) {
				return;
			}

			closePopup(true);
		});
	};

	return (
		<ComboboxContext.Provider value={context}>
			<div class={rootClass()} ref={setRootRef} onFocusOut={handleFocusOut} {...rest}>
				{local.children ? resolvedChildren() : (
					<>
						<ComboboxControl>
							<ComboboxInput aria-label={local.placeholder ?? 'Combobox'} />
							<ComboboxTrigger />
						</ComboboxControl>
						<ComboboxPortal>
							<ComboboxContent>
								<ComboboxListbox />
							</ComboboxContent>
						</ComboboxPortal>
					</>
				)}
			</div>
		</ComboboxContext.Provider>
	);
}
