import clsx from 'clsx/lite';
import { splitProps } from 'solid-js';
import { tableClass } from './class';
import type { TableRowProps } from './types';
import './table-row.css';

export function TableRow(props: TableRowProps) {
	const [local, rest] = splitProps(props, ['class', 'children']);
	return (
		<tr
			class={clsx(tableClass.row, local.class)}
			{...rest}
		>
			{local.children}
		</tr>
	);
}
