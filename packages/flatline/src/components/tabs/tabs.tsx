import './tabs.css';
import { tabsClass } from "./classname";
import { Tabs as BaseTabs } from '@base-ui-components/react';
import clsx from 'clsx';

export interface TabsRootProps extends BaseTabs.Root.Props {
	variant?: keyof typeof tabsClass.variants;
};
export type TabsListProps = BaseTabs.List.Props;
export type TabsPanelProps = BaseTabs.Panel.Props;
export type TabProps = BaseTabs.Tab.Props;

export function TabsRoot(props: TabsRootProps) {
	const { children, className, variant = 'text', ...rest } = props;

	let rootClass: typeof className = undefined;
	const variantClass = tabsClass.variants[variant];
	if(typeof className === 'function') {
		rootClass = state => clsx(tabsClass.root, variantClass, className(state));
	}
	else {
		rootClass = clsx(tabsClass.root, variantClass, className);
	}

	return (
		<BaseTabs.Root className={rootClass} {...rest}>
			{children}
		</BaseTabs.Root>
	)
}

export function TabsList(props: TabsListProps) {
	const { children, className, ...rest } = props;

	let rootClass: typeof className = undefined;
	if(typeof className === 'function') {
		rootClass = state => clsx(tabsClass.list, className(state));
	}
	else {
		rootClass = clsx(tabsClass.list, className);
	}

	return (
		<BaseTabs.List className={rootClass} {...rest}>
			{children}
			<BaseTabs.Indicator className={tabsClass.indicator} />
		</BaseTabs.List>
	)
}

export function TabsPanel(props: TabsPanelProps) {
	const { children, className, ...rest } = props;

	let rootClass: typeof className = undefined;
	if(typeof className === 'function') {
		rootClass = state => clsx(tabsClass.panel, className(state));
	}
	else {
		rootClass = clsx(tabsClass.panel, className);
	}

	return (
		<BaseTabs.Panel className={rootClass} {...rest}>
			{children}
		</BaseTabs.Panel>
	)
}

export function Tab(props: TabProps) {
	const { children, className, ...rest } = props;

	let rootClass: typeof className = undefined;
	if(typeof className === 'function') {
		rootClass = state => clsx(tabsClass.tab, className(state));
	}
	else {
		rootClass = clsx(tabsClass.tab, className);
	}

	return (
		<BaseTabs.Tab className={rootClass} {...rest}>
			{children}
		</BaseTabs.Tab>
	)
}
