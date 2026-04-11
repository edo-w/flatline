import clsx from 'clsx/lite';
import { createSignal, createUniqueId, splitProps } from 'solid-js';
import { radioClass } from './class';
import { RadioGroupContext } from './context';
import type { RadioGroupProps } from './types';
import './radio-group.css';

export function RadioGroup(props: RadioGroupProps) {
	const generatedName = createUniqueId();
	const [local, rest] = splitProps(props, [
		'class',
		'children',
		'value',
		'defaultValue',
		'name',
		'disabled',
		'onChange',
	]);
	const [internalValue, setInternalValue] = createSignal(local.defaultValue);

	const value = () => local.value ?? internalValue();
	const name = () => local.name ?? generatedName;
	const disabled = () => Boolean(local.disabled);
	const setValue = (nextValue: string) => {
		if (local.value === undefined) {
			setInternalValue(nextValue);
		}

		local.onChange?.(nextValue);
	};

	return (
		<RadioGroupContext.Provider value={{ name, value, setValue, disabled }}>
			<div
				class={clsx(radioClass.group, local.class)}
				role="radiogroup"
				{...rest}
			>
				{local.children}
			</div>
		</RadioGroupContext.Provider>
	);
}
