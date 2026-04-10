import clsx from 'clsx/lite';
import {
	Tabs as KTabs,
	type TabsContentProps as KTabsContentProps,
	type TabsIndicatorProps as KTabsIndicatorProps,
	type TabsListProps as KTabsListProps,
	type TabsRootProps as KTabsRootProps,
	type TabsTriggerProps as KTabsTriggerProps
} from '@kobalte/core/tabs';
import { mergeProps, splitProps, type JSX } from 'solid-js';
import { tabsClass, type TabsColor } from './class';
import './tabs-root.css';
import './tabs-list.css';
import './tabs-trigger.css';
import './tabs-indicator.css';
import './tabs-content.css';

export type TabsRootBaseProps = KTabsRootProps & JSX.HTMLAttributes<HTMLDivElement>;

export interface TabsRootProps extends TabsRootBaseProps {
	color?: TabsColor;
}

export type TabsListProps = KTabsListProps & JSX.HTMLAttributes<HTMLDivElement>;
export type TabsTriggerProps = KTabsTriggerProps & JSX.ButtonHTMLAttributes<HTMLButtonElement>;
export type TabsIndicatorProps = KTabsIndicatorProps & JSX.HTMLAttributes<HTMLDivElement>;
export type TabsContentProps = KTabsContentProps & JSX.HTMLAttributes<HTMLDivElement>;

export function TabsRoot(props: TabsRootProps) {
	const merged = mergeProps({
		color: 'primary'
	} as const, props);
	const [local, rest] = splitProps(merged, ['class', 'color']);

	const rootClass = () => clsx(
		tabsClass.root,
		tabsClass.color[local.color],
		local.class
	);

	return <KTabs class={rootClass()} {...rest} />;
}

export function TabsList(props: TabsListProps) {
	const [local, rest] = splitProps(props, ['class']);

	const rootClass = () => clsx(
		tabsClass.list,
		local.class
	);

	return <KTabs.List class={rootClass()} {...rest} />;
}

export function TabsTrigger(props: TabsTriggerProps) {
	const [local, rest] = splitProps(props, ['class']);

	const rootClass = () => clsx(
		tabsClass.trigger,
		local.class
	);

	return <KTabs.Trigger class={rootClass()} {...rest} />;
}

export function TabsIndicator(props: TabsIndicatorProps) {
	const [local, rest] = splitProps(props, ['class']);

	const rootClass = () => clsx(
		tabsClass.indicator,
		local.class
	);

	return <KTabs.Indicator class={rootClass()} {...rest} />;
}

export function TabsContent(props: TabsContentProps) {
	const [local, rest] = splitProps(props, ['class']);

	const rootClass = () => clsx(
		tabsClass.content,
		local.class
	);

	return <KTabs.Content class={rootClass()} {...rest} />;
}

export const Tabs = Object.assign(TabsRoot, {
	List: TabsList,
	Trigger: TabsTrigger,
	Indicator: TabsIndicator,
	Content: TabsContent
});
