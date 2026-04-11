import type {
	DropdownMenuArrowProps as KDropdownMenuArrowProps,
	DropdownMenuCheckboxItemProps as KDropdownMenuCheckboxItemProps,
	DropdownMenuContentProps as KDropdownMenuContentProps,
	DropdownMenuGroupLabelProps as KDropdownMenuGroupLabelProps,
	DropdownMenuGroupProps as KDropdownMenuGroupProps,
	DropdownMenuIconProps as KDropdownMenuIconProps,
	DropdownMenuItemIndicatorProps as KDropdownMenuItemIndicatorProps,
	DropdownMenuItemProps as KDropdownMenuItemProps,
	DropdownMenuPortalProps as KDropdownMenuPortalProps,
	DropdownMenuRadioGroupProps as KDropdownMenuRadioGroupProps,
	DropdownMenuRadioItemProps as KDropdownMenuRadioItemProps,
	DropdownMenuRootProps as KDropdownMenuRootProps,
	DropdownMenuSeparatorProps as KDropdownMenuSeparatorProps,
	DropdownMenuSubContentProps as KDropdownMenuSubContentProps,
	DropdownMenuSubProps as KDropdownMenuSubProps,
	DropdownMenuSubTriggerProps as KDropdownMenuSubTriggerProps,
	DropdownMenuTriggerProps as KDropdownMenuTriggerProps,
} from '@kobalte/core/dropdown-menu';
import type { JSX } from 'solid-js';
import type { ButtonProps } from '../button';

export type DropdownMenuRootProps = KDropdownMenuRootProps;
export type DropdownMenuTriggerProps = KDropdownMenuTriggerProps & Omit<ButtonProps, 'type'>;
export type DropdownMenuIconProps = KDropdownMenuIconProps & JSX.HTMLAttributes<HTMLSpanElement>;
export type DropdownMenuPortalProps = KDropdownMenuPortalProps;
export type DropdownMenuContentProps = KDropdownMenuContentProps & JSX.HTMLAttributes<HTMLDivElement>;
export type DropdownMenuItemProps = KDropdownMenuItemProps & JSX.HTMLAttributes<HTMLDivElement>;
export type DropdownMenuCheckboxItemProps = KDropdownMenuCheckboxItemProps & JSX.HTMLAttributes<HTMLDivElement>;
export type DropdownMenuRadioItemProps = KDropdownMenuRadioItemProps & JSX.HTMLAttributes<HTMLDivElement>;
export type DropdownMenuRadioGroupProps = KDropdownMenuRadioGroupProps & JSX.HTMLAttributes<HTMLDivElement>;
export type DropdownMenuGroupProps = KDropdownMenuGroupProps & JSX.HTMLAttributes<HTMLDivElement>;
export type DropdownMenuGroupLabelProps = KDropdownMenuGroupLabelProps & JSX.HTMLAttributes<HTMLSpanElement>;
export type DropdownMenuSeparatorProps = KDropdownMenuSeparatorProps & JSX.HTMLAttributes<HTMLHRElement>;
export type DropdownMenuItemIndicatorProps = KDropdownMenuItemIndicatorProps & JSX.HTMLAttributes<HTMLDivElement>;
export type DropdownMenuSubProps = KDropdownMenuSubProps;
export type DropdownMenuSubTriggerProps = KDropdownMenuSubTriggerProps & JSX.HTMLAttributes<HTMLDivElement>;
export type DropdownMenuSubContentProps = KDropdownMenuSubContentProps & JSX.HTMLAttributes<HTMLDivElement>;
export type DropdownMenuArrowProps = KDropdownMenuArrowProps & JSX.HTMLAttributes<SVGSVGElement>;
export type DropdownMenuItemRightSlotProps = JSX.HTMLAttributes<HTMLSpanElement>;
