import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { Input } from './input';

const meta: Meta<typeof Input> = {
	title: 'Input',
	component: Input,
	parameters: {
		layout: 'centered',
		controls: {
			exclude: ['use:eventListener']
		}
	},
	args: {
		type: 'text',
		value: ''
	},
	argTypes: {
		type: {
			control: 'select',
			options: ['text', 'number', 'password'],
		},
		value: {
			control: 'text',
		},
		disabled: {
			control: 'boolean',
		},
		placeholder: {
			control: 'text',
		}
	}
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const DefaultWithValue: Story = {
	args: {
		value: 'some value'
	},
};

export const Disabled: Story = {
	args: {
		disabled: true
	},
};

export const DisabledWithValue: Story = {
	args: {
		disabled: true,
		value: 'some value'
	},
};

export const Placeholder: Story = {
	args: {
		placeholder: 'some text'
	},
};

export const Text: Story = {
	args: {
		type: 'text',
		value: 'Hello World!'
	},
};

export const Number: Story = {
	args: {
		type: 'number',
		value: 81
	},
	argTypes: {
		value: {
			control: 'number',
		}
	}
};

export const Password: Story = {
	args: {
		type: 'password',
		value: 'supersecret'
	},
};
