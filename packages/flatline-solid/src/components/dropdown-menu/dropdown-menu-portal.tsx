import { DropdownMenu as KDropdownMenu } from '@kobalte/core/dropdown-menu';
import type { DropdownMenuPortalProps } from './types';

export function DropdownMenuPortal(props: DropdownMenuPortalProps) {
	return <KDropdownMenu.Portal {...props} />;
}
