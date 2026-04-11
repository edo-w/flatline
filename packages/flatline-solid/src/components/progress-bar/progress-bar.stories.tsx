import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { ProgressBar } from './progress-bar';

const meta: Meta<typeof ProgressBar> = {
	title: 'Progress Bar',
	component: ProgressBar,
	parameters: {
		layout: 'centered',
		controls: {
			exclude: ['use:eventListener'],
		},
	},
	args: {
		style: { width: '18rem' },
		value: 40,
		max: 100,
		indeterminate: false,
	},
	argTypes: {
		style: {
			table: {
				disable: true,
			},
		},
		value: {
			control: 'number',
		},
		max: {
			control: 'number',
		},
		indeterminate: {
			control: 'boolean',
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Complete: Story = {
	args: {
		value: 100,
	},
};

export const Indeterminate: Story = {
	args: {
		indeterminate: true,
	},
};
