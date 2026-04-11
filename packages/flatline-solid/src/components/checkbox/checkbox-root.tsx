import clsx from 'clsx/lite';
import { createSignal, mergeProps, splitProps, type JSX } from 'solid-js';
import { CheckIcon } from '#src/icons';
import { checkboxClass } from './class';
import { useCheckboxGroupContext } from './context';
import type { CheckboxProps } from './types';
import './checkbox-root.css';

export function CheckboxRoot(props: CheckboxProps) {
	const context = useCheckboxGroupContext();
	const merged = mergeProps(
		{
			type: 'checkbox',
			value: 'on',
		} as const,
		props,
	);
	const [local, rest] = splitProps(merged, [
		'checked',
		'children',
		'class',
		'defaultChecked',
		'disabled',
		'name',
		'onChange',
		'type',
		'value',
	]);
	const [internalChecked, setInternalChecked] = createSignal(Boolean(local.defaultChecked));
	const rootClass = () => clsx(checkboxClass.root, local.class);
	const checked = () => {
		if (context) {
			return context.values().includes(local.value);
		}

		return local.checked ?? internalChecked();
	};
	const disabled = () => Boolean(context?.disabled() || local.disabled);
	const name = () => context?.name() ?? local.name;

	const handleChange: JSX.EventHandlerUnion<HTMLInputElement, Event> = (event) => {
		const nextChecked = event.currentTarget.checked;
		local.onChange?.(nextChecked);

		if (context) {
			context.toggleValue(local.value, nextChecked);
			return;
		}

		if (local.checked === undefined) {
			setInternalChecked(nextChecked);
		}
	};

	return (
		<label
			class={rootClass()}
			data-disabled={disabled() ? '' : undefined}
		>
			<input
				class={checkboxClass.input}
				type="checkbox"
				value={local.value}
				name={name()}
				checked={checked()}
				disabled={disabled()}
				onChange={handleChange}
				{...rest}
			/>
			<span class={checkboxClass.control}>
				<span class={checkboxClass.indicator}>
					<CheckIcon
						w="0.875rem"
						h="0.875rem"
					/>
				</span>
			</span>
			{local.children ? <span class={checkboxClass.label}>{local.children}</span> : null}
		</label>
	);
}
