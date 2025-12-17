import preview from '../../../.storybook/preview';
import { Select } from './select';

const meta = preview.meta({
	component: Select,
	argTypes: {
		children: {
			control: false,
			table: { disable: true }
		}
	}
});

export const Default = meta.story({
	args: {
		style: { width: '200px' }
	}
});

export const Disabled = meta.story({
	args: {
		disabled: true,
		style: { width: '200px' }
	}
});

export const WithValue = meta.story({
	args: {
		defaultValue: '3',
		children: (
			<>
				<option value="1">Item 1</option>
				<option value="2">Item 2</option>
				<option value="3">Item 3</option>
			</>
		)
	}
});

export const WithItems = meta.story({
	args: {
		defaultValue: '',
		children: (
			<>
				<option value="1">Item 1</option>
				<option value="2">Item 2</option>
				<option value="3">Item 3</option>
			</>
		)
	}
});

export const WithGroupedItems = meta.story({
	args: {
		defaultValue: '',
		children: (
			<>
				<optgroup label="Group 1">
					<option value="11">Item 1</option>
					<option value="2">Item 2</option>
					<option value="3">Item 3</option>
				</optgroup>
				<optgroup label="Group 2">
					<option value="4">Item 4</option>
					<option value="5">Item 5</option>
					<option value="6">Item 6</option>
				</optgroup>
			</>
		)
	}
})


