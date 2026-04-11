import { DropdownMenu as KDropdownMenu } from '@kobalte/core/dropdown-menu';
import type { DropdownMenuSubProps } from './types';

export function DropdownMenuSub(props: DropdownMenuSubProps) {
	return <KDropdownMenu.Sub {...props} />;
}
