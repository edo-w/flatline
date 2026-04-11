import type { JSX } from 'solid-js';
import { TableBody } from './table-body';
import { TableCaption } from './table-caption';
import { TableCell } from './table-cell';
import { TableFooter } from './table-footer';
import { TableHead } from './table-head';
import { TableHeader } from './table-header';
import { TableRoot } from './table-root';
import { TableRow } from './table-row';
import type { TableProps } from './types';
export type {
	TableBodyProps,
	TableCaptionProps,
	TableCellProps,
	TableFooterProps,
	TableHeadProps,
	TableHeaderProps,
	TableProps,
	TableRowProps,
} from './types';
export { TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRoot, TableRow };

export interface TableComponent {
	(props: TableProps): JSX.Element;
	Header: typeof TableHeader;
	Body: typeof TableBody;
	Footer: typeof TableFooter;
	Head: typeof TableHead;
	Row: typeof TableRow;
	Cell: typeof TableCell;
	Caption: typeof TableCaption;
}

export const Table: TableComponent = Object.assign(TableRoot, {
	Header: TableHeader,
	Body: TableBody,
	Footer: TableFooter,
	Head: TableHead,
	Row: TableRow,
	Cell: TableCell,
	Caption: TableCaption,
});
