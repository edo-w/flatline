import clsx from 'clsx/lite';
import { splitProps } from 'solid-js';
import { tableClass } from './class';
import type { TableCellProps } from './types';
import './table-cell.css';

export function TableCell(props: TableCellProps) {
	const [local, rest] = splitProps(props, ['class', 'children']);
	return (
		<td
			class={clsx(tableClass.cell, local.class)}
			{...rest}
		>
			{local.children}
		</td>
	);
}
