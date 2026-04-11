import { isObjectRecord } from '#src/lib/reflect';
import type { ComboboxAccessor, ComboboxGroupAccessor } from './types';

export function defaultTextValue(value: unknown) {
	if (typeof value === 'string' || typeof value === 'number') {
		return String(value);
	}

	if (isObjectRecord(value)) {
		if (typeof value.label === 'string') {
			return value.label;
		}

		if (typeof value.textValue === 'string') {
			return value.textValue;
		}
	}

	return '';
}

export function resolveAccessor<T, Result>(
	value: T,
	accessor: ComboboxAccessor<T, Result> | undefined,
	fallback: (value: T) => Result,
) {
	if (accessor === undefined) {
		return fallback(value);
	}

	if (typeof accessor === 'function') {
		return accessor(value as Exclude<T, null>);
	}

	if (isObjectRecord(value)) {
		return value[accessor as string] as Result;
	}

	return fallback(value);
}

export function resolveGroupChildren<TOptionGroup, TOption>(
	value: TOptionGroup,
	accessor: ComboboxGroupAccessor<TOptionGroup, TOption> | undefined,
) {
	if (accessor === undefined) {
		return undefined;
	}

	if (typeof accessor === 'function') {
		return accessor(value as Exclude<TOptionGroup, null>);
	}

	if (isObjectRecord(value)) {
		const children = value[accessor as string];

		if (Array.isArray(children)) {
			return children as TOption[];
		}
	}

	return undefined;
}

export function createContainsFilter<Option>() {
	return (option: Option, inputValue: string) => {
		const normalizedOption = defaultTextValue(option).toLowerCase();
		const normalizedInput = inputValue.trim().toLowerCase();

		if (normalizedInput === '') {
			return true;
		}

		return normalizedOption.includes(normalizedInput);
	};
}

export function callEventHandler(handler: unknown, event: globalThis.Event) {
	if (typeof handler === 'function') {
		(handler as (event: globalThis.Event) => void)(event);
	}
}
