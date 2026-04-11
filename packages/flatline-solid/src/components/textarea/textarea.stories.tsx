import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { TextArea } from './textarea';

const meta: Meta<typeof TextArea> = {
	title: 'TextArea',
	component: TextArea,
	parameters: {
		layout: 'centered',
		controls: {
			exclude: ['use:eventListener'],
		},
	},
	args: {
		style: { width: '22rem' },
		placeholder: 'Write something...',
	},
	argTypes: {
		style: {
			table: {
				disable: true,
			},
		},
		value: {
			control: 'text',
		},
		placeholder: {
			control: 'text',
		},
		disabled: {
			control: 'boolean',
		},
		rows: {
			control: 'number',
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		rows: 5,
	},
};

export const WithValue: Story = {
	args: {
		rows: 5,
		value: 'A longer multiline value that shows the resting state of the text area.',
	},
};

export const Disabled: Story = {
	args: {
		rows: 5,
		disabled: true,
		value: 'This field is disabled.',
	},
};
