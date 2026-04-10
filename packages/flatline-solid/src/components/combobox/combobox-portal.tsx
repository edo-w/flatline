import { children } from 'solid-js';
import type { ComboboxPortalProps } from './types';

export function ComboboxPortal(props: ComboboxPortalProps) {
	const resolvedChildren = children(() => props.children);

	return <>{resolvedChildren()}</>;
}
