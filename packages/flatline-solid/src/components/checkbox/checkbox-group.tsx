import clsx from 'clsx/lite';
import { createSignal, createUniqueId, splitProps } from 'solid-js';
import { checkboxClass } from './class';
import { CheckboxGroupContext } from './context';
import type { CheckboxGroupProps } from './types';
import './checkbox-group.css';

export function CheckboxGroup(props: CheckboxGroupProps) {
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
	const [internalValue, setInternalValue] = createSignal(local.defaultValue ?? []);

	const values = () => local.value ?? internalValue();
	const name = () => local.name ?? generatedName;
	const disabled = () => Boolean(local.disabled);
	const toggleValue = (nextValue: string, checked: boolean) => {
		const current = values();
		let next = current;

		if (checked) {
			if (!current.includes(nextValue)) {
				next = [...current, nextValue];
			}
		} else {
			next = current.filter((value) => value !== nextValue);
		}

		if (local.value === undefined) {
			setInternalValue(next);
		}

		local.onChange?.(next);
	};

	return (
		<CheckboxGroupContext.Provider value={{ name, values, toggleValue, disabled }}>
			<div
				class={clsx(checkboxClass.group, local.class)}
				role="group"
				{...rest}
			>
				{local.children}
			</div>
		</CheckboxGroupContext.Provider>
	);
}
