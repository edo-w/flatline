import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { Tabs, type TabsRootProps } from './tabs';

const meta: Meta<typeof Tabs> = {
	title: 'Tabs',
	component: Tabs,
	parameters: {
		layout: 'centered',
		controls: {
			exclude: ['style', 'use:eventListener']
		}
	},
	args: {
		defaultValue: 'profile',
		color: 'primary',
		style: { width: '420px' },
		orientation: 'horizontal',
		activationMode: 'automatic'
	},
	argTypes: {
		children: {
			table: {
				disable: true
			}
		},
		color: {
			control: 'select',
			options: ['primary', 'secondary'],
		},
		orientation: {
			control: 'select',
			options: ['horizontal', 'vertical'],
		},
		activationMode: {
			control: 'select',
			options: ['automatic', 'manual'],
		}
	}
};

export default meta;

type Story = StoryObj<typeof meta>;

function RenderTabs(props: TabsRootProps) {
	return (
		<Tabs {...props} aria-label="Main navigation">
			<Tabs.List>
				<Tabs.Trigger value="profile">Profile</Tabs.Trigger>
				<Tabs.Trigger value="dashboard">Dashboard</Tabs.Trigger>
				<Tabs.Trigger value="settings">Settings</Tabs.Trigger>
				<Tabs.Trigger value="contact">Contact</Tabs.Trigger>
				<Tabs.Indicator />
			</Tabs.List>
			<Tabs.Content value="profile">Profile details</Tabs.Content>
			<Tabs.Content value="dashboard">Dashboard details</Tabs.Content>
			<Tabs.Content value="settings">Settings details</Tabs.Content>
			<Tabs.Content value="contact">Contact details</Tabs.Content>
		</Tabs>
	);
}

export const Primary: Story = {
	render: (args: TabsRootProps) => <RenderTabs {...args} />,
	args: {
		color: 'primary'
	}
};

export const Secondary: Story = {
	render: (args: TabsRootProps) => <RenderTabs {...args} />,
	args: {
		color: 'secondary'
	}
};

export const Vertical: Story = {
	render: (args: TabsRootProps) => <RenderTabs {...args} />,
	args: {
		orientation: 'vertical',
		style: { width: '560px' }
	}
};
