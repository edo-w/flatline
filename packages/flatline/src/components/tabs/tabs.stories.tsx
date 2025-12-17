import preview from '../../../.storybook/preview';
import { TabsList, TabsRoot, Tab, TabsPanel } from './tabs';

const meta = preview.meta({
	component: TabsRoot,
	argTypes: {
		children: {
			control: false,
			table: { disable: true }
		}
	}
});

export const Default = meta.story({
	args: {
		variant: 'underline',
		children: (
			<>
				<TabsList>
					<Tab value="tab1">Tab 1</Tab>
					<Tab value="tab2">Tab 2</Tab>
					<Tab value="tab3">Tab 3</Tab>
				</TabsList>
				<TabsPanel value="tab1">
					Content 1
				</TabsPanel>
				<TabsPanel value="tab2">
					Content 2
					</TabsPanel>
				<TabsPanel value="tab3">
					Content 3
				</TabsPanel>
			</>
		)
	}
})
