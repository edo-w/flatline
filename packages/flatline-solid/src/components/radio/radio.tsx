import type { JSX } from 'solid-js';
import { RadioGroup } from './radio-group';
import { RadioRoot } from './radio-root';
import type { RadioProps } from './types';
export type { RadioBaseProps, RadioGroupBaseProps, RadioGroupProps, RadioProps } from './types';
export { RadioGroup, RadioRoot };

export interface RadioComponent {
	(props: RadioProps): JSX.Element;
	Group: typeof RadioGroup;
}

export const Radio: RadioComponent = Object.assign(RadioRoot, {
	Group: RadioGroup,
});
