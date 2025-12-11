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
		style: { width: '200px'}
	}
});

export const WithItems = meta.story({
	args: {
		children: (
			<>
				<option value="1">Item 1</option>
				<option value="2">Item 2</option>
				<option value="3">Item 3</option>
			</>
		)
	}
})
