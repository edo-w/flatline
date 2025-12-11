import preview from '../../../.storybook/preview';
import { Button } from './index';

const meta = preview.meta({
    component: Button,
});

export const Default = meta.story({
    args: {
        children: 'Button Default',
    },
});

export const Disabled = meta.story({
	args: {
		children: 'Button Disabled',
		disabled: true
	}
})
