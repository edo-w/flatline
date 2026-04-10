import { splitProps } from 'solid-js';
import { useComboboxContext } from './context';
import type { ComboboxHiddenSelectProps } from './types';

export function ComboboxHiddenSelect(props: ComboboxHiddenSelectProps) {
	const context = useComboboxContext<any, any>();
	const [local, rest] = splitProps(props, ['name', 'value']);

	return <input type="hidden" name={local.name ?? context.name()} value={local.value ?? context.selectedItem()?.value ?? ''} {...rest} />;
}
