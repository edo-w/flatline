import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { createSignal } from 'solid-js';
import { Checkbox } from './checkbox';
import { CheckboxGroup } from './checkbox-group';

const meta: Meta<typeof CheckboxGroup> = {
	title: 'Checkbox',
	component: CheckboxGroup,
	parameters: {
		layout: 'centered',
		controls: {
			exclude: ['children', 'use:eventListener'],
		},
	},
	argTypes: {
		onChange: {
			table: {
				disable: true,
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Standalone: Story = {
	render: () => <Checkbox defaultChecked>Enable email updates</Checkbox>,
};

export const Grouped: Story = {
	render: () => {
		const [value, setValue] = createSignal(['alerts', 'billing']);

		return (
			<div style={{ display: 'grid', gap: '0.75rem' }}>
				<CheckboxGroup
					value={value()}
					onChange={setValue}
				>
					<Checkbox value="alerts">Product alerts</Checkbox>
					<Checkbox value="billing">Billing summaries</Checkbox>
					<Checkbox value="releases">Release announcements</Checkbox>
				</CheckboxGroup>
				<div>Selected: {value().join(', ') || 'none'}</div>
			</div>
		);
	},
};

export const Disabled: Story = {
	render: () => (
		<CheckboxGroup
			defaultValue={['analytics']}
			disabled
		>
			<Checkbox value="analytics">Analytics</Checkbox>
			<Checkbox value="exports">Exports</Checkbox>
		</CheckboxGroup>
	),
};
