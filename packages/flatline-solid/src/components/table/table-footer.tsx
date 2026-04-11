import clsx from 'clsx/lite';
import { splitProps } from 'solid-js';
import { tableClass } from './class';
import type { TableFooterProps } from './types';
import './table-footer.css';

export function TableFooter(props: TableFooterProps) {
	const [local, rest] = splitProps(props, ['class', 'children']);
	return (
		<tfoot
			class={clsx(tableClass.footer, local.class)}
			{...rest}
		>
			{local.children}
		</tfoot>
	);
}
