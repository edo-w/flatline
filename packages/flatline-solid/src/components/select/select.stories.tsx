import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { Select } from './select';

const meta: Meta<typeof Select> = {
	title: 'Select',
	component: Select,
	parameters: {
		layout: 'centered',
	},
	args: {
		style: { width: '200px' },
		value: ''
	},
	argTypes: {
		style: {
			table: {
				disable: true
			}
		},
		children: {
			table: {
				disable: true
			}
		},
		value: {
			control: 'text',
		},
		disabled: {
			control: 'boolean',
		}
	}
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: [
			<option value="">Select an option</option>,
			<option value="1">Item 1</option>,
			<option value="2">Item 2</option>,
			<option value="3">Item 3</option>,
		]
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		children: [
			<option value="">Select an option</option>,
			<option value="1">Item 1</option>,
			<option value="2">Item 2</option>,
			<option value="3">Item 3</option>,
		]
	},
};

export const WithValue: Story = {
	args: {
		value: '3',
		children: [
			<option value="1">Item 1</option>,
			<option value="2">Item 2</option>,
			<option value="3">Item 3</option>,
		]
	},
};

export const WithItems: Story = {
	args: {
		children: [
			<option value="">Select an option</option>,
			<option value="1">Item 1</option>,
			<option value="2">Item 2</option>,
			<option value="3">Item 3</option>,
		]
	},
};

export const WithGroupedItems: Story = {
	args: {
		children: [
			<option value="">Select an option</option>,
			<optgroup label="Group 1">
				<option value="1">Item 1</option>
				<option value="2">Item 2</option>
				<option value="3">Item 3</option>
			</optgroup>,
			<optgroup label="Group 2">
				<option value="4">Item 4</option>
				<option value="5">Item 5</option>
				<option value="6">Item 6</option>
			</optgroup>
		]
	},
};
