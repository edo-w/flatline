import clsx from 'clsx/lite';
import { splitProps } from 'solid-js';
import { tableClass } from './class';
import type { TableHeadProps } from './types';
import './table-head.css';

export function TableHead(props: TableHeadProps) {
	const [local, rest] = splitProps(props, ['class', 'children']);
	return (
		<th
			class={clsx(tableClass.head, local.class)}
			{...rest}
		>
			{local.children}
		</th>
	);
}
