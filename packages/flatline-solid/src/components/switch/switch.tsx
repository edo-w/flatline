import clsx from 'clsx/lite';
import { createSignal, mergeProps, splitProps, type JSX } from 'solid-js';
import { switchClass } from './class';
import './switch.css';

export type SwitchBaseProps = Omit<JSX.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'size'>;

export interface SwitchProps extends SwitchBaseProps {
	checked?: boolean;
	defaultChecked?: boolean;
	onChange?: (checked: boolean) => void;
}

export function Switch(props: SwitchProps) {
	const merged = mergeProps(
		{
			value: 'on',
		} as const,
		props,
	);
	const [local, rest] = splitProps(merged, ['class', 'children', 'checked', 'defaultChecked', 'disabled', 'onChange']);
	const [internalChecked, setInternalChecked] = createSignal(Boolean(local.defaultChecked));

	const rootClass = () => clsx(switchClass.root, local.class);
	const checked = () => local.checked ?? internalChecked();

	const handleChange: JSX.EventHandlerUnion<HTMLInputElement, Event> = (event) => {
		const nextChecked = event.currentTarget.checked;

		if (local.checked === undefined) {
			setInternalChecked(nextChecked);
		}

		local.onChange?.(nextChecked);
	};

	return (
		<label
			class={rootClass()}
			data-disabled={local.disabled ? '' : undefined}
		>
			<input
				type="checkbox"
				class={switchClass.input}
				checked={checked()}
				disabled={local.disabled}
				onChange={handleChange}
				{...rest}
			/>
			<span class={switchClass.control}>
				<span class={switchClass.thumb} />
			</span>
			{local.children ? <span class={switchClass.label}>{local.children}</span> : null}
		</label>
	);
}
