import type { JSX } from 'solid-js';
import { CheckboxGroup } from './checkbox-group';
import { CheckboxRoot } from './checkbox-root';
import type { CheckboxProps } from './types';
export type { CheckboxBaseProps, CheckboxGroupBaseProps, CheckboxGroupProps, CheckboxProps } from './types';

export interface CheckboxComponent {
	(props: CheckboxProps): JSX.Element;
	Group: typeof CheckboxGroup;
}

export const Checkbox: CheckboxComponent = Object.assign(CheckboxRoot, {
	Group: CheckboxGroup,
});
