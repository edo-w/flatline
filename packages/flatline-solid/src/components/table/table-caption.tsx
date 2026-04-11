import clsx from 'clsx/lite';
import { splitProps } from 'solid-js';
import { tableClass } from './class';
import type { TableCaptionProps } from './types';
import './table-caption.css';

export function TableCaption(props: TableCaptionProps) {
	const [local, rest] = splitProps(props, ['class', 'children']);
	return (
		<caption
			class={clsx(tableClass.caption, local.class)}
			{...rest}
		>
			{local.children}
		</caption>
	);
}
