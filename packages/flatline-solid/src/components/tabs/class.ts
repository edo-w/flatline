export const tabsClass = {
	root: 'fl-tabs',
	list: 'fl-tabs_list',
	trigger: 'fl-tabs_trigger',
	indicator: 'fl-tabs_indicator',
	content: 'fl-tabs_content',
	color: {
		primary: '--color-primary',
		secondary: '--color-secondary',
	},
} as const;

export type TabsColor = keyof typeof tabsClass.color;
