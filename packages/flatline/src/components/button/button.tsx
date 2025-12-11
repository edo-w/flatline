import { Button as BaseButton } from '@base-ui-components/react';
import clsx from 'clsx/lite';
import { buttonClass } from './classname';
import './button.css';

type BaseButtonProps = Omit<BaseButton.Props, 'className'>;

export interface ButtonProps extends BaseButtonProps {
    className?: string;
};

export function Button(props: ButtonProps) {
    const { className, children, ...rest } = props;
    const rootClass = clsx(buttonClass.root, className);

    return (
        <BaseButton className={rootClass} {...rest}>
            {children}
        </BaseButton>
    )
}
