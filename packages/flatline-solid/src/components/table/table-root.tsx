import clsx from 'clsx/lite';
import { splitProps } from 'solid-js';
import { tableClass } from './class';
import type { TableProps } from './types';
import './table-root.css';

export function TableRoot(props: TableProps) {
	const [local, rest] = splitProps(props, ['class', 'children']);
	return (
		<table
			class={clsx(tableClass.root, local.class)}
			{...rest}
		>
			{local.children}
		</table>
	);
}
