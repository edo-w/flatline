import clsx from 'clsx/lite';
import { type JSX, splitProps } from 'solid-js';
import { sliderClass } from './class';
import './slider.css';

export type SliderBaseProps = Omit<JSX.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'size'>;

type SliderInputEvent = InputEvent & { currentTarget: HTMLInputElement; target: HTMLInputElement };
type SliderInputHandler = (event: SliderInputEvent) => void;

export interface SliderProps extends SliderBaseProps {
	onChange?: (value: number) => void;
}

export function Slider(props: SliderProps) {
	const [local, rest] = splitProps(props, ['class', 'onChange', 'onInput']);

	const rootClass = () => clsx(sliderClass.root, local.class);

	const callInputHandler = (handler: unknown, event: InputEvent) => {
		if (typeof handler === 'function') {
			(handler as SliderInputHandler)(event as SliderInputEvent);
		}
	};

	const handleInput: JSX.EventHandlerUnion<HTMLInputElement, InputEvent> = (event) => {
		callInputHandler(local.onInput, event);

		local.onChange?.(Number(event.currentTarget.value));
	};

	return (
		<input
			type="range"
			class={rootClass()}
			onInput={handleInput}
			{...rest}
		/>
	);
}
