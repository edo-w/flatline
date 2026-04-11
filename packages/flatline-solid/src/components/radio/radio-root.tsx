import clsx from 'clsx/lite';
import { createSignal, type JSX, mergeProps, splitProps } from 'solid-js';
import { radioClass } from './class';
import { useRadioGroupContext } from './context';
import type { RadioProps } from './types';
import './radio-root.css';

export function RadioRoot(props: RadioProps) {
	const context = useRadioGroupContext();
	const merged = mergeProps(
		{
			type: 'radio',
		} as const,
		props,
	);
	const [local, rest] = splitProps(merged, [
		'class',
		'children',
		'checked',
		'defaultChecked',
		'disabled',
		'name',
		'onChange',
		'type',
		'value',
	]);
	const [internalChecked, setInternalChecked] = createSignal(Boolean(local.defaultChecked));
	const rootClass = () => clsx(radioClass.root, local.class);
	const checked = () => {
		if (context) {
			return context.value() === local.value;
		}

		return local.checked ?? internalChecked();
	};
	const disabled = () => Boolean(context?.disabled() || local.disabled);
	const name = () => context?.name() ?? local.name;

	const handleChange: JSX.EventHandlerUnion<HTMLInputElement, Event> = (event) => {
		const nextChecked = event.currentTarget.checked;
		local.onChange?.(nextChecked);

		if (context && nextChecked) {
			context.setValue(local.value);
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
				class={radioClass.input}
				type="radio"
				value={local.value}
				name={name()}
				checked={checked()}
				disabled={disabled()}
				onChange={handleChange}
				{...rest}
			/>
			<span class={radioClass.control}>
				<span class={radioClass.indicator} />
			</span>
			{local.children ? <span class={radioClass.label}>{local.children}</span> : null}
		</label>
	);
}
