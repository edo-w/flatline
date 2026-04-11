import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { Slider } from './slider';

const meta: Meta<typeof Slider> = {
	title: 'Slider',
	component: Slider,
	parameters: {
		layout: 'centered',
		controls: {
			exclude: ['use:eventListener'],
		},
	},
	args: {
		style: { width: '18rem' },
		min: 0,
		max: 100,
		value: 50,
	},
	argTypes: {
		style: {
			table: {
				disable: true,
			},
		},
		min: {
			control: 'number',
		},
		max: {
			control: 'number',
		},
		step: {
			control: 'number',
		},
		value: {
			control: 'number',
		},
		disabled: {
			control: 'boolean',
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Interactive: Story = {
	render: () => {
		const [value, setValue] = createSignal(35);

		return (
			<div style={{ display: 'grid', gap: '0.75rem', width: '18rem' }}>
				<Slider
					min={0}
					max={100}
					value={value()}
					onChange={setValue}
				/>
				<div>Value: {value()}</div>
			</div>
		);
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};
