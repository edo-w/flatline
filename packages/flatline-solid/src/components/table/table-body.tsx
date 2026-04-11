import clsx from 'clsx/lite';
import { splitProps } from 'solid-js';
import { tableClass } from './class';
import type { TableBodyProps } from './types';

export function TableBody(props: TableBodyProps) {
	const [local, rest] = splitProps(props, ['class', 'children']);
	return (
		<tbody
			class={clsx(tableClass.body, local.class)}
			{...rest}
		>
			{local.children}
		</tbody>
	);
}
