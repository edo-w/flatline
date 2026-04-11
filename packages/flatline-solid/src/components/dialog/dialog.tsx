import {
	Dialog as KDialog,
	type DialogCloseButtonProps as KDialogCloseButtonProps,
	type DialogContentProps as KDialogContentProps,
	type DialogDescriptionProps as KDialogDescriptionProps,
	type DialogOverlayProps as KDialogOverlayProps,
	type DialogPortalProps as KDialogPortalProps,
	type DialogRootProps as KDialogRootProps,
	type DialogTitleProps as KDialogTitleProps,
	type DialogTriggerProps as KDialogTriggerProps,
} from '@kobalte/core/dialog';
import clsx from 'clsx/lite';
import { type JSX, mergeProps, splitProps } from 'solid-js';
import { Button, type ButtonProps } from '../button';
import { type DialogContentSize, dialogClass } from './class';
import './dialog-trigger.css';
import './dialog-overlay.css';
import './dialog-positioner.css';
import './dialog-content.css';
import './dialog-header.css';
import './dialog-close-button.css';
import './dialog-title.css';
import './dialog-description.css';

export interface DialogRootProps extends KDialogRootProps {}

export type DialogPortalProps = KDialogPortalProps;
export type DialogTriggerProps = KDialogTriggerProps & JSX.ButtonHTMLAttributes<HTMLButtonElement>;
export type DialogOverlayProps = KDialogOverlayProps & JSX.HTMLAttributes<HTMLDivElement>;
export type DialogContentBaseProps = KDialogContentProps & Omit<JSX.HTMLAttributes<HTMLDivElement>, 'ref'>;

export interface DialogContentProps extends DialogContentBaseProps {
	size?: DialogContentSize;
}
export type DialogTitleProps = KDialogTitleProps & JSX.HTMLAttributes<HTMLHeadingElement>;
export type DialogDescriptionProps = KDialogDescriptionProps & JSX.HTMLAttributes<HTMLParagraphElement>;
export type DialogCloseButtonProps = KDialogCloseButtonProps & JSX.ButtonHTMLAttributes<HTMLButtonElement>;
export type DialogButtonTriggerProps = KDialogTriggerProps & Omit<ButtonProps, 'type'>;
export type DialogPositionerProps = JSX.HTMLAttributes<HTMLDivElement>;
export type DialogHeaderProps = JSX.HTMLAttributes<HTMLDivElement>;

export function DialogRoot(props: DialogRootProps) {
	return <KDialog {...props} />;
}

export function DialogPortal(props: DialogPortalProps) {
	return <KDialog.Portal {...props} />;
}

export function DialogTrigger(props: DialogTriggerProps) {
	const [local, rest] = splitProps(props, ['class']);

	const rootClass = () => clsx(dialogClass.trigger, local.class);

	return (
		<KDialog.Trigger
			class={rootClass()}
			{...rest}
		/>
	);
}

export function DialogButtonTrigger(props: DialogButtonTriggerProps) {
	const merged = mergeProps(
		{
			type: 'button',
			variant: 'solid',
			color: 'primary',
		} as const,
		props,
	);

	return (
		<KDialog.Trigger
			as={Button}
			{...merged}
		/>
	);
}

export function DialogOverlay(props: DialogOverlayProps) {
	const [local, rest] = splitProps(props, ['class']);

	const rootClass = () => clsx(dialogClass.overlay, local.class);

	return (
		<KDialog.Overlay
			class={rootClass()}
			{...rest}
		/>
	);
}

export function DialogPositioner(props: DialogPositionerProps) {
	const [local, rest] = splitProps(props, ['class']);

	const rootClass = () => clsx(dialogClass.positioner, local.class);

	return (
		<div
			class={rootClass()}
			{...rest}
		/>
	);
}

export function DialogContent(props: DialogContentProps) {
	const merged = mergeProps(
		{
			size: 'md',
		} as const,
		props,
	);
	const [local, rest] = splitProps(merged, ['class', 'size']);

	const rootClass = () => {
		const sizeClass = dialogClass.contentSize[local.size];

		return clsx(dialogClass.content, sizeClass, local.class);
	};

	return (
		<KDialog.Content
			class={rootClass()}
			{...rest}
		/>
	);
}

export function DialogHeader(props: DialogHeaderProps) {
	const [local, rest] = splitProps(props, ['class']);

	const rootClass = () => clsx(dialogClass.header, local.class);

	return (
		<div
			class={rootClass()}
			{...rest}
		/>
	);
}

export function DialogTitle(props: DialogTitleProps) {
	const [local, rest] = splitProps(props, ['class']);

	const rootClass = () => clsx(dialogClass.title, local.class);

	return (
		<KDialog.Title
			class={rootClass()}
			{...rest}
		/>
	);
}

export function DialogDescription(props: DialogDescriptionProps) {
	const [local, rest] = splitProps(props, ['class']);

	const rootClass = () => clsx(dialogClass.description, local.class);

	return (
		<KDialog.Description
			class={rootClass()}
			{...rest}
		/>
	);
}

export function DialogCloseButton(props: DialogCloseButtonProps) {
	const merged = mergeProps(
		{
			'aria-label': 'Close dialog',
		} as const,
		props,
	);
	const [local, rest] = splitProps(merged, ['class']);

	const rootClass = () => clsx(dialogClass.closeButton, local.class);

	return (
		<KDialog.CloseButton
			class={rootClass()}
			{...rest}
		/>
	);
}

export const Dialog = Object.assign(DialogRoot, {
	Portal: DialogPortal,
	Trigger: DialogTrigger,
	ButtonTrigger: DialogButtonTrigger,
	Overlay: DialogOverlay,
	Positioner: DialogPositioner,
	Content: DialogContent,
	Header: DialogHeader,
	Title: DialogTitle,
	Description: DialogDescription,
	CloseButton: DialogCloseButton,
});
