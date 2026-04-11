import { type Accessor, createContext, useContext } from 'solid-js';

export interface RadioGroupContextValue {
	name: Accessor<string>;
	value: Accessor<string | undefined>;
	setValue: (value: string) => void;
	disabled: Accessor<boolean>;
}

export const RadioGroupContext = createContext<RadioGroupContextValue>();

export function useRadioGroupContext() {
	return useContext(RadioGroupContext);
}
