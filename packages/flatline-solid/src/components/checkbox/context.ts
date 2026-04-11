import { createContext, useContext, type Accessor } from 'solid-js';

export interface CheckboxGroupContextValue {
	name: Accessor<string>;
	values: Accessor<string[]>;
	toggleValue: (value: string, checked: boolean) => void;
	disabled: Accessor<boolean>;
}

export const CheckboxGroupContext = createContext<CheckboxGroupContextValue>();

export function useCheckboxGroupContext() {
	return useContext(CheckboxGroupContext);
}
