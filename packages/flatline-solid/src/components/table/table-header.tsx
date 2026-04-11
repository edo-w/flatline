import clsx from 'clsx/lite';
import { splitProps } from 'solid-js';
import { tableClass } from './class';
import type { TableHeaderProps } from './types';

export function TableHeader(props: TableHeaderProps) {
	const [local, rest] = splitProps(props, ['class', 'children']);
	return (
		<thead
			class={clsx(tableClass.header, local.class)}
			{...rest}
		>
			{local.children}
		</thead>
	);
}
