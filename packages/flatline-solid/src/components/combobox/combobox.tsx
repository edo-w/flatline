import type { JSX } from 'solid-js';
import './combobox-root.css';
import './combobox-control.css';
import './combobox-input.css';
import './combobox-trigger.css';
import './combobox-icon.css';
import './combobox-content.css';
import './combobox-listbox.css';
import './combobox-item.css';
import './combobox-group.css';
import './combobox-item-indicator.css';
import { ComboboxContent } from './combobox-content';
import { ComboboxControl } from './combobox-control';
import { ComboboxGroup } from './combobox-group';
import { ComboboxHiddenSelect } from './combobox-hidden-select';
import { ComboboxIcon } from './combobox-icon';
import { ComboboxInput } from './combobox-input';
import { ComboboxItem } from './combobox-item';
import { ComboboxItemIndicator } from './combobox-item-indicator';
import { ComboboxItemLabel } from './combobox-item-label';
import { ComboboxListbox } from './combobox-listbox';
import { ComboboxPortal } from './combobox-portal';
import { ComboboxRoot } from './combobox-root';
import { ComboboxTrigger } from './combobox-trigger';
import type { ComboboxRootProps } from './types';
export type {
	ComboboxContentProps,
	ComboboxControlProps,
	ComboboxGroupData,
	ComboboxGroupProps,
	ComboboxHiddenSelectProps,
	ComboboxIconProps,
	ComboboxInputProps,
	ComboboxItemData,
	ComboboxItemIndicatorProps,
	ComboboxItemLabelProps,
	ComboboxItemProps,
	ComboboxListboxProps,
	ComboboxPortalProps,
	ComboboxRenderGroupProps,
	ComboboxRenderItemProps,
	ComboboxRootProps,
	ComboboxTriggerProps,
} from './types';

export {
	ComboboxContent,
	ComboboxControl,
	ComboboxGroup,
	ComboboxHiddenSelect,
	ComboboxIcon,
	ComboboxInput,
	ComboboxItem,
	ComboboxItemIndicator,
	ComboboxItemLabel,
	ComboboxListbox,
	ComboboxPortal,
	ComboboxRoot,
	ComboboxTrigger,
};

export interface ComboboxComponent {
	<TOption, TOptionGroup = never>(props: ComboboxRootProps<TOption, TOptionGroup>): JSX.Element;
	Control: typeof ComboboxControl;
	Input: typeof ComboboxInput;
	Trigger: typeof ComboboxTrigger;
	Icon: typeof ComboboxIcon;
	Portal: typeof ComboboxPortal;
	Content: typeof ComboboxContent;
	Listbox: typeof ComboboxListbox;
	Item: typeof ComboboxItem;
	ItemLabel: typeof ComboboxItemLabel;
	ItemIndicator: typeof ComboboxItemIndicator;
	Group: typeof ComboboxGroup;
	HiddenSelect: typeof ComboboxHiddenSelect;
}

export const Combobox: ComboboxComponent = Object.assign(ComboboxRoot, {
	Control: ComboboxControl,
	Input: ComboboxInput,
	Trigger: ComboboxTrigger,
	Icon: ComboboxIcon,
	Portal: ComboboxPortal,
	Content: ComboboxContent,
	Listbox: ComboboxListbox,
	Item: ComboboxItem,
	ItemLabel: ComboboxItemLabel,
	ItemIndicator: ComboboxItemIndicator,
	Group: ComboboxGroup,
	HiddenSelect: ComboboxHiddenSelect,
});
