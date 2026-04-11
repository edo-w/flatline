import type { JSX } from 'solid-js';
import { DropdownMenuArrow } from './dropdown-menu-arrow';
import { DropdownMenuCheckboxItem } from './dropdown-menu-checkbox-item';
import { DropdownMenuContent } from './dropdown-menu-content';
import { DropdownMenuGroup } from './dropdown-menu-group';
import { DropdownMenuGroupLabel } from './dropdown-menu-group-label';
import { DropdownMenuIcon } from './dropdown-menu-icon';
import { DropdownMenuItem } from './dropdown-menu-item';
import { DropdownMenuItemIndicator } from './dropdown-menu-item-indicator';
import { DropdownMenuItemRightSlot } from './dropdown-menu-item-right-slot';
import { DropdownMenuPortal } from './dropdown-menu-portal';
import { DropdownMenuRadioGroup } from './dropdown-menu-radio-group';
import { DropdownMenuRadioItem } from './dropdown-menu-radio-item';
import { DropdownMenuRoot } from './dropdown-menu-root';
import { DropdownMenuSeparator } from './dropdown-menu-separator';
import { DropdownMenuSub } from './dropdown-menu-sub';
import { DropdownMenuSubContent } from './dropdown-menu-sub-content';
import { DropdownMenuSubTrigger } from './dropdown-menu-sub-trigger';
import { DropdownMenuTrigger } from './dropdown-menu-trigger';
import type { DropdownMenuRootProps } from './types';

export type {
	DropdownMenuArrowProps,
	DropdownMenuCheckboxItemProps,
	DropdownMenuContentProps,
	DropdownMenuGroupLabelProps,
	DropdownMenuGroupProps,
	DropdownMenuIconProps,
	DropdownMenuItemIndicatorProps,
	DropdownMenuItemProps,
	DropdownMenuItemRightSlotProps,
	DropdownMenuPortalProps,
	DropdownMenuRadioGroupProps,
	DropdownMenuRadioItemProps,
	DropdownMenuRootProps,
	DropdownMenuSeparatorProps,
	DropdownMenuSubContentProps,
	DropdownMenuSubProps,
	DropdownMenuSubTriggerProps,
	DropdownMenuTriggerProps,
} from './types';
export {
	DropdownMenuArrow,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuGroupLabel,
	DropdownMenuIcon,
	DropdownMenuItem,
	DropdownMenuItemIndicator,
	DropdownMenuItemRightSlot,
	DropdownMenuPortal,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuRoot,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
};

export interface DropdownMenuComponent {
	(props: DropdownMenuRootProps): JSX.Element;
	Trigger: typeof DropdownMenuTrigger;
	Icon: typeof DropdownMenuIcon;
	Portal: typeof DropdownMenuPortal;
	Content: typeof DropdownMenuContent;
	Item: typeof DropdownMenuItem;
	CheckboxItem: typeof DropdownMenuCheckboxItem;
	RadioItem: typeof DropdownMenuRadioItem;
	RadioGroup: typeof DropdownMenuRadioGroup;
	Group: typeof DropdownMenuGroup;
	GroupLabel: typeof DropdownMenuGroupLabel;
	Separator: typeof DropdownMenuSeparator;
	ItemIndicator: typeof DropdownMenuItemIndicator;
	ItemRightSlot: typeof DropdownMenuItemRightSlot;
	Sub: typeof DropdownMenuSub;
	SubTrigger: typeof DropdownMenuSubTrigger;
	SubContent: typeof DropdownMenuSubContent;
	Arrow: typeof DropdownMenuArrow;
}

export const DropdownMenu: DropdownMenuComponent = Object.assign(DropdownMenuRoot, {
	Trigger: DropdownMenuTrigger,
	Icon: DropdownMenuIcon,
	Portal: DropdownMenuPortal,
	Content: DropdownMenuContent,
	Item: DropdownMenuItem,
	CheckboxItem: DropdownMenuCheckboxItem,
	RadioItem: DropdownMenuRadioItem,
	RadioGroup: DropdownMenuRadioGroup,
	Group: DropdownMenuGroup,
	GroupLabel: DropdownMenuGroupLabel,
	Separator: DropdownMenuSeparator,
	ItemIndicator: DropdownMenuItemIndicator,
	ItemRightSlot: DropdownMenuItemRightSlot,
	Sub: DropdownMenuSub,
	SubTrigger: DropdownMenuSubTrigger,
	SubContent: DropdownMenuSubContent,
	Arrow: DropdownMenuArrow,
});
