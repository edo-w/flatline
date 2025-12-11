import preview from '../../../.storybook/preview';
import { Input } from './input';

const meta = preview.meta({
	component: Input,
});

export const Default = meta.story({
	args: {}
});

export const DefaultWithValue = meta.story({
	args: {
		defaultValue: 'Input Value'
	}
});

export const Disabled = meta.story({
	args: {
		disabled: true
	}
});

export const DisabledWithValue = meta.story({
	args: {
		disabled: true,
		defaultValue: 'Disabled Input'
	}
});

export const Placeholder = meta.story({
	args: {
		placeholder: 'With Placeholder Text'
	}
});

export const Text = meta.story({
	args: {
		type: 'text',
		defaultValue: 'Hello World!'
	}
});

export const Number = meta.story({
	args: {
		type: 'number',
		defaultValue: 81
	}
});

export const Password = meta.story({
	args: {
		type: 'password',
		defaultValue: 'supersecret'
	}
});
