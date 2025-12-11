import './button.css';
import clsx from 'clsx/lite';
import { buttonClass } from './classname';
import type { HtmlHTMLAttributes } from 'react';

export type ButtonProps = HtmlHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
    const { className, children, ...rest } = props;
    const rootClass = clsx(buttonClass.root, className);

    return (
        <button className={rootClass} {...rest}>
            {children}
        </button>
    )
}
