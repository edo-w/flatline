import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { Input } from '#src/components/input';
import { Label, type LabelProps } from './label';

const meta: Meta<typeof Label> = {
	title: 'Label',
	component: Label,
	parameters: {
		layout: 'centered',
		controls: {
			exclude: ['use:eventListener'],
		},
	},
	args: {
		children: 'Email address',
	},
	argTypes: {
		children: {
			control: 'text',
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithInput: Story = {
	render: (args: LabelProps) => (
		<div style={{ display: 'grid', gap: '0.5rem', width: '18rem' }}>
			<Label
				for="label-story-input"
				{...args}
			/>
			<Input
				id="label-story-input"
				placeholder="name@example.com"
			/>
		</div>
	),
};
