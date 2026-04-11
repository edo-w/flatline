import type { JSX } from 'solid-js';

export type RadioGroupBaseProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, 'onChange'>;

export interface RadioGroupProps extends RadioGroupBaseProps {
	value?: string;
	defaultValue?: string;
	name?: string;
	disabled?: boolean;
	onChange?: (value: string) => void;
}

export type RadioBaseProps = Omit<JSX.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'size'>;

export interface RadioProps extends RadioBaseProps {
	checked?: boolean;
	defaultChecked?: boolean;
	value: string;
	onChange?: (checked: boolean) => void;
}
