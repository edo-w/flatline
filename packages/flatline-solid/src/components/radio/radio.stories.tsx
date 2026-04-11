import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { Radio, RadioGroup } from './radio';

const meta: Meta<typeof RadioGroup> = {
	title: 'Radio',
	component: RadioGroup,
	parameters: {
		layout: 'centered',
		controls: {
			exclude: ['use:eventListener'],
		},
	},
	argTypes: {
		children: {
			table: {
				disable: true,
			},
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
	render: () => (
		<RadioGroup defaultValue="starter">
			<Radio value="starter">Starter</Radio>
			<Radio value="growth">Growth</Radio>
			<Radio value="enterprise">Enterprise</Radio>
		</RadioGroup>
	),
};

export const Controlled: Story = {
	render: () => {
		const [value, setValue] = createSignal('weekly');

		return (
			<div style={{ display: 'grid', gap: '0.75rem' }}>
				<RadioGroup
					value={value()}
					onChange={setValue}
				>
					<Radio value="daily">Daily</Radio>
					<Radio value="weekly">Weekly</Radio>
					<Radio value="monthly">Monthly</Radio>
				</RadioGroup>
				<div>Selected: {value()}</div>
			</div>
		);
	},
};

export const Disabled: Story = {
	render: () => (
		<RadioGroup
			defaultValue="pro"
			disabled
		>
			<Radio value="free">Free</Radio>
			<Radio value="pro">Pro</Radio>
			<Radio value="team">Team</Radio>
		</RadioGroup>
	),
};
