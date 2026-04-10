import clsx from "clsx/lite";
import { mergeProps, splitProps, type JSX } from "solid-js";
import { buttonClass, type ButtonColor, type ButtonVariant } from "./class";
import './button.css';

export type ButtonBaseProps = JSX.ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonProps extends ButtonBaseProps {
	variant?: ButtonVariant;
	color?: ButtonColor;
}

export function Button(props: ButtonProps) {
	const merged = mergeProps({
		type: 'button',
		variant: 'solid',
		color: 'primary'
	} as const, props);
    const [local, rest] = splitProps(merged, ["class", "children", 'variant', 'color']);

	const rootClass = () => clsx(
		buttonClass.root,
		buttonClass.variant[local.variant],
		buttonClass.color[local.color],
		local.class
	);

    return (
        <button class={rootClass()} {...rest}>
            {local.children}
        </button>
    )
}
