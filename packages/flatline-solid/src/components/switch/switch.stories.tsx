import { createSignal } from 'solid-js';
import { fn } from 'storybook/test';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { Switch } from './switch';

const meta: Meta<typeof Switch> = {
	title: 'Switch',
	component: Switch,
	parameters: {
		layout: 'centered',
		controls: {
			exclude: ['use:eventListener'],
		},
	},
	args: {
		children: 'Enable notifications',
		onChange: fn(),
	},
	argTypes: {
		children: {
			control: 'text',
		},
		checked: {
			control: 'boolean',
		},
		defaultChecked: {
			control: 'boolean',
		},
		disabled: {
			control: 'boolean',
		},
		onChange: {
			table: {
				disable: true,
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		defaultChecked: true,
	},
};

export const Controlled: Story = {
	render: () => {
		const [checked, setChecked] = createSignal(false);

		return (
			<div style={{ display: 'grid', gap: '0.75rem' }}>
				<Switch
					checked={checked()}
					onChange={setChecked}
				>
					Controlled switch
				</Switch>
				<div>Checked: {checked() ? 'true' : 'false'}</div>
			</div>
		);
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		defaultChecked: true,
	},
};
