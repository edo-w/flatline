import type { Component, JSX } from 'solid-js';

export type ComboboxAccessor<T, Result> = keyof Exclude<T, null> | ((value: Exclude<T, null>) => Result);
export type ComboboxGroupAccessor<TOptionGroup, TOption> = keyof Exclude<TOptionGroup, null> | ((group: Exclude<TOptionGroup, null>) => TOption[]);

export interface ComboboxItemData<TOption> {
	key: string;
	value: string;
	label: string;
	textValue: string;
	disabled: boolean;
	rawValue: TOption;
}

export interface ComboboxGroupData<TOptionGroup, TOption> {
	key: string;
	textValue: string;
	rawValue?: TOptionGroup;
	items: ComboboxItemData<TOption>[];
}

export type ComboboxRenderItemProps<TOption> = {
	item: ComboboxItemData<TOption>;
};

export type ComboboxRenderGroupProps<TOptionGroup, TOption = any> = {
	group: ComboboxGroupData<TOptionGroup, TOption>;
};

export interface ComboboxRootProps<TOption, TOptionGroup = never> extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'onChange'> {
	options: Array<TOption | TOptionGroup>;
	children?: JSX.Element;
	optionValue?: ComboboxAccessor<TOption, string | number>;
	optionTextValue?: ComboboxAccessor<TOption, string>;
	optionLabel?: ComboboxAccessor<TOption, string>;
	optionDisabled?: ComboboxAccessor<TOption, boolean>;
	optionGroupChildren?: ComboboxGroupAccessor<TOptionGroup, TOption>;
	itemComponent?: Component<ComboboxRenderItemProps<TOption>>;
	groupComponent?: Component<ComboboxRenderGroupProps<TOptionGroup, TOption>>;
	placeholder?: string;
	value?: TOption | null;
	defaultValue?: TOption;
	inputValue?: string;
	defaultInputValue?: string;
	onChange?: (value: TOption | null) => void;
	onInputChange?: (value: string) => void;
	open?: boolean;
	defaultOpen?: boolean;
	onOpenChange?: (value: boolean) => void;
	disabled?: boolean;
	readOnly?: boolean;
	required?: boolean;
	name?: string;
	closeOnSelection?: boolean;
}

export type ComboboxControlProps = JSX.HTMLAttributes<HTMLDivElement>;
export type ComboboxInputProps = JSX.InputHTMLAttributes<HTMLInputElement>;
export type ComboboxTriggerProps = JSX.ButtonHTMLAttributes<HTMLButtonElement>;
export type ComboboxIconProps = JSX.HTMLAttributes<HTMLSpanElement>;
export type ComboboxPortalProps = {
	children?: JSX.Element;
};
export type ComboboxContentProps = JSX.HTMLAttributes<HTMLDivElement>;
export type ComboboxListboxProps = JSX.HTMLAttributes<HTMLUListElement>;

export interface ComboboxItemProps<TOption = any> extends JSX.HTMLAttributes<HTMLLIElement> {
	item: ComboboxItemData<TOption>;
}

export type ComboboxItemLabelProps = JSX.HTMLAttributes<HTMLDivElement>;
export type ComboboxItemIndicatorProps = JSX.HTMLAttributes<HTMLDivElement>;

export interface ComboboxGroupProps<TOptionGroup = any, TOption = any> extends JSX.HTMLAttributes<HTMLLIElement> {
	group?: ComboboxGroupData<TOptionGroup, TOption>;
}

export interface ComboboxHiddenSelectProps extends JSX.InputHTMLAttributes<HTMLInputElement> {}
