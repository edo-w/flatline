import { DropdownMenu as KDropdownMenu } from '@kobalte/core/dropdown-menu';
import type { DropdownMenuRootProps } from './types';

export function DropdownMenuRoot(props: DropdownMenuRootProps) {
	return <KDropdownMenu {...props} />;
}
