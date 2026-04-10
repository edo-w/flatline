import { createSignal, type Component } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import {
	Combobox,
	type ComboboxRenderGroupProps
} from './combobox';

const CITIES = ['Amsterdam', 'Athens', 'Barcelona', 'Berlin', 'Copenhagen', 'Lisbon', 'London', 'Madrid', 'Oslo', 'Paris'];

type LocationOption = {
	value: string;
	label: string;
	disabled?: boolean;
};

type LocationGroup = {
	label: string;
	options: LocationOption[];
};

const GROUPED_LOCATIONS: LocationGroup[] = [
	{
		label: 'Europe',
		options: [
			{ value: 'amsterdam', label: 'Amsterdam' },
			{ value: 'berlin', label: 'Berlin' },
			{ value: 'london', label: 'London', disabled: true }
		]
	},
	{
		label: 'Nordics',
		options: [
			{ value: 'copenhagen', label: 'Copenhagen' },
			{ value: 'oslo', label: 'Oslo' }
		]
	}
];

type ComboboxStoryArgs = {
	options?: string[];
	placeholder?: string;
	disabled?: boolean;
	defaultValue?: string;
	width?: string;
};

const ComboboxStoryComponent: Component<ComboboxStoryArgs> = (args) => (
	<div style={{ width: args.width }}>
		<Combobox
			options={args.options ?? CITIES}
			placeholder={args.placeholder}
			disabled={args.disabled}
			defaultValue={args.defaultValue}
		/>
	</div>
);

const meta: Meta<ComboboxStoryArgs> = {
	title: 'Combobox',
	component: ComboboxStoryComponent,
	parameters: {
		layout: 'centered',
		controls: {
			exclude: ['children', 'groupComponent', 'itemComponent', 'options', 'style', 'use:eventListener']
		}
	},
	args: {
		options: CITIES,
		placeholder: 'Search a city...',
		disabled: false,
		width: '300px',
	},
	argTypes: {
		options: {
			table: {
				disable: true
			}
		},
		placeholder: {
			control: 'text'
		},
		disabled: {
			control: 'boolean'
		},
		width: {
			control: 'text'
		}
	}
};

export default meta;

type Story = StoryObj<typeof meta>;

function GroupedGroup(props: ComboboxRenderGroupProps<LocationGroup>) {
	return <Combobox.Group>{props.group.textValue}</Combobox.Group>;
}

export const Default: Story = {
	render: (args: ComboboxStoryArgs) => (
		<div style={{ width: args.width }}>
			<Combobox
				options={args.options ?? CITIES}
				placeholder={args.placeholder}
				disabled={args.disabled}
				defaultValue={args.defaultValue}
			/>
		</div>
	)
};

export const Controlled: Story = {
	render: (args: ComboboxStoryArgs) => {
		const initialValue = args.defaultValue ?? 'Berlin';
		const [value, setValue] = createSignal<string | null>(initialValue);
		const [inputValue, setInputValue] = createSignal(initialValue);

		return (
			<div style={{ display: 'grid', gap: '1rem', width: args.width }}>
				<div>
					<div>Input: {inputValue() || 'empty'}</div>
					<div>Selected: {value() ?? 'none'}</div>
				</div>
				<Combobox
					options={args.options ?? CITIES}
					value={value()}
					inputValue={inputValue()}
					disabled={args.disabled}
					onChange={(nextValue: string | null) => {
						setValue(nextValue);

						if (nextValue !== null) {
							setInputValue(nextValue);
						}
					}}
					onInputChange={setInputValue}
					placeholder={args.placeholder}
				/>
			</div>
		);
	}
};

export const GroupedItems: Story = {
	render: (args: ComboboxStoryArgs) => (
		<div style={{ width: args.width }}>
			<Combobox<LocationOption, LocationGroup>
				options={GROUPED_LOCATIONS}
				optionValue="value"
				optionTextValue="label"
				optionLabel="label"
				optionDisabled="disabled"
				optionGroupChildren="options"
				groupComponent={GroupedGroup}
				placeholder={args.placeholder}
				disabled={args.disabled}
				/>
		</div>
	)
};
