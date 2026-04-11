import type { JSX } from 'solid-js';

export type CheckboxGroupBaseProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, 'onChange'>;

export interface CheckboxGroupProps extends CheckboxGroupBaseProps {
	value?: string[];
	defaultValue?: string[];
	name?: string;
	disabled?: boolean;
	onChange?: (value: string[]) => void;
}

export type CheckboxBaseProps = Omit<JSX.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'size'>;

export interface CheckboxProps extends CheckboxBaseProps {
	checked?: boolean;
	defaultChecked?: boolean;
	value?: string;
	onChange?: (checked: boolean) => void;
}
