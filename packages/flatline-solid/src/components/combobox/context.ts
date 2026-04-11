import { type Accessor, type Component, createContext, type Setter, useContext } from 'solid-js';
import type { ComboboxGroupData, ComboboxItemData, ComboboxRenderGroupProps, ComboboxRenderItemProps } from './types';

interface ComboboxItemState<TOption> {
	item: ComboboxItemData<TOption>;
	selected: boolean;
	highlighted: boolean;
}

export interface ComboboxContextValue<TOption, TOptionGroup> {
	rootId: string;
	rootRef: Accessor<HTMLDivElement | undefined>;
	setRootRef: Setter<HTMLDivElement | undefined>;
	inputRef: Accessor<HTMLInputElement | undefined>;
	setInputRef: Setter<HTMLInputElement | undefined>;
	inputValue: Accessor<string>;
	setInputValue: (value: string) => void;
	isOpen: Accessor<boolean>;
	openPopup: (strategy?: 'first' | 'last' | 'preserve') => void;
	closePopup: (restoreInput?: boolean) => void;
	togglePopup: () => void;
	visibleGroups: Accessor<Array<ComboboxGroupData<TOptionGroup, TOption>>>;
	visibleItems: Accessor<Array<ComboboxItemData<TOption>>>;
	selectedItem: Accessor<ComboboxItemData<TOption> | null>;
	highlightedKey: Accessor<string | null>;
	setHighlightedKey: (key: string | null) => void;
	highlightNext: () => void;
	highlightPrevious: () => void;
	highlightFirst: () => void;
	highlightLast: () => void;
	selectItem: (item: ComboboxItemData<TOption>) => void;
	getItemId: (key: string) => string;
	itemComponent?: Component<ComboboxRenderItemProps<TOption>>;
	groupComponent?: Component<ComboboxRenderGroupProps<TOptionGroup, TOption>>;
	placeholder: Accessor<string | undefined>;
	disabled: Accessor<boolean>;
	readOnly: Accessor<boolean>;
	required: Accessor<boolean>;
	name: Accessor<string | undefined>;
	clearPendingInput: () => void;
	clearSelectedItem: () => void;
}

export const ComboboxContext = createContext<ComboboxContextValue<any, any>>();
export const ComboboxItemContext = createContext<ComboboxItemState<any>>();

export function useComboboxContext<TOption, TOptionGroup>() {
	const context = useContext(ComboboxContext);

	if (!context) {
		throw new Error('Combobox components must be used within Combobox.');
	}

	return context as ComboboxContextValue<TOption, TOptionGroup>;
}

export function useComboboxItemContext<TOption>() {
	const context = useContext(ComboboxItemContext);

	if (!context) {
		throw new Error('Combobox item parts must be used within Combobox.Item.');
	}

	return context as ComboboxItemState<TOption>;
}
