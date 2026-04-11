import clsx from 'clsx/lite';
import { splitProps, type JSX } from 'solid-js';
import { cardClass, type CardFooterJustify, type CardTitleColor } from './class';
import './card-root.css';
import './card-header.css';
import './card-title.css';
import './card-subtitle.css';
import './card-action.css';
import './card-content.css';
import './card-footer.css';

function mergeStyleVar(
	style: JSX.CSSProperties | string | undefined,
	variable: string,
	value: number | string | undefined,
) {
	if (typeof style === 'string') {
		if (value === undefined) {
			return style;
		}

		return `${variable}: ${value}; ${style}`;
	}

	return {
		[variable]: value,
		...style,
	};
}

export type CardBaseProps = JSX.HTMLAttributes<HTMLDivElement>;
export type CardHeaderProps = JSX.HTMLAttributes<HTMLDivElement>;
export type CardSubtitleProps = JSX.HTMLAttributes<HTMLParagraphElement>;
export type CardActionProps = JSX.HTMLAttributes<HTMLDivElement>;

export interface CardProps extends CardBaseProps {
	gap?: number | string;
}

export interface CardTitleProps extends JSX.HTMLAttributes<HTMLHeadingElement> {
	color?: CardTitleColor;
}

export interface CardContentProps extends JSX.HTMLAttributes<HTMLDivElement> {
	gap?: number | string;
}

export interface CardFooterProps extends JSX.HTMLAttributes<HTMLDivElement> {
	gap?: number | string;
	justify?: CardFooterJustify;
}

function CardRoot(props: CardProps) {
	const [local, rest] = splitProps(props, ['class', 'children', 'gap', 'style']);

	const rootClass = () => clsx(cardClass.root, local.class);

	return (
		<div
			class={rootClass()}
			style={mergeStyleVar(local.style, cardClass.rootGapVar, local.gap)}
			{...rest}
		>
			{local.children}
		</div>
	);
}

export function CardHeader(props: CardHeaderProps) {
	const [local, rest] = splitProps(props, ['class', 'children']);

	const rootClass = () => clsx(cardClass.header, local.class);

	return (
		<div
			class={rootClass()}
			{...rest}
		>
			{local.children}
		</div>
	);
}

export function CardTitle(props: CardTitleProps) {
	const [local, rest] = splitProps(props, ['class', 'children', 'color']);

	const rootClass = () => {
		const colorClass = local.color ? cardClass.titleColor[local.color] : undefined;

		return clsx(cardClass.title, colorClass, local.class);
	};

	return (
		<h3
			class={rootClass()}
			{...rest}
		>
			{local.children}
		</h3>
	);
}

export function CardSubtitle(props: CardSubtitleProps) {
	const [local, rest] = splitProps(props, ['class', 'children']);

	const rootClass = () => clsx(cardClass.subtitle, local.class);

	return (
		<p
			class={rootClass()}
			{...rest}
		>
			{local.children}
		</p>
	);
}

export function CardAction(props: CardActionProps) {
	const [local, rest] = splitProps(props, ['class', 'children']);

	const rootClass = () => clsx(cardClass.action, local.class);

	return (
		<div
			class={rootClass()}
			{...rest}
		>
			{local.children}
		</div>
	);
}

export function CardContent(props: CardContentProps) {
	const [local, rest] = splitProps(props, ['class', 'children', 'gap', 'style']);

	const rootClass = () => clsx(cardClass.content, local.class);

	return (
		<div
			class={rootClass()}
			style={mergeStyleVar(local.style, cardClass.contentGapVar, local.gap)}
			{...rest}
		>
			{local.children}
		</div>
	);
}

export function CardFooter(props: CardFooterProps) {
	const [local, rest] = splitProps(props, ['class', 'children', 'gap', 'justify', 'style']);

	const rootClass = () => {
		const justifyClass = local.justify ? cardClass.footerJustify[local.justify] : undefined;

		return clsx(cardClass.footer, justifyClass, local.class);
	};

	return (
		<div
			class={rootClass()}
			style={mergeStyleVar(local.style, cardClass.footerGapVar, local.gap)}
			{...rest}
		>
			{local.children}
		</div>
	);
}

export const Card = Object.assign(CardRoot, {
	Header: CardHeader,
	Title: CardTitle,
	Subtitle: CardSubtitle,
	Action: CardAction,
	Content: CardContent,
	Footer: CardFooter,
});
