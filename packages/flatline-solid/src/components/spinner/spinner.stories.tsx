import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { Spinner } from './spinner';

const meta: Meta<typeof Spinner> = {
	title: 'Spinner',
	component: Spinner,
	parameters: {
		layout: 'centered',
		controls: {
			exclude: ['use:eventListener'],
		},
	},
	args: {
		size: 'md',
		label: 'Loading',
	},
	argTypes: {
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
		},
		label: {
			control: 'text',
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
	render: () => (
		<div style={{ display: 'flex', 'align-items': 'center', gap: '1rem' }}>
			<Spinner size="sm" />
			<Spinner size="md" />
			<Spinner size="lg" />
		</div>
	),
};
