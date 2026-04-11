import { createSignal, type JSX } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { CheckIcon, ChevronDownIcon, ChevronRightIcon, DotFilledIcon } from '#src/icons';
import { DropdownMenu } from './dropdown-menu';

type DropdownStoryArgs = {
	triggerVariant: 'solid' | 'light' | 'ghost';
	triggerColor: 'primary' | 'secondary' | 'success' | 'danger';
	triggerDisabled: boolean;
};

const meta: Meta<DropdownStoryArgs> = {
	title: 'Dropdown Menu',
	parameters: {
		layout: 'centered',
		controls: {
			exclude: ['children', 'use:eventListener'],
		},
	},
	args: {
		triggerVariant: 'solid',
		triggerColor: 'secondary',
		triggerDisabled: false,
	},
	argTypes: {
		triggerVariant: {
			control: 'select',
			options: ['solid', 'light', 'ghost'],
		},
		triggerColor: {
			control: 'select',
			options: ['primary', 'secondary', 'success', 'danger'],
		},
		triggerDisabled: {
			control: 'boolean',
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

const variantLabel = {
	solid: 'Solid',
	light: 'Light',
	ghost: 'Ghost',
} as const;

const colorLabel = {
	primary: 'Primary',
	secondary: 'Secondary',
	success: 'Success',
	danger: 'Danger',
} as const;

type TriggerVariant = keyof typeof variantLabel;
type TriggerColor = keyof typeof colorLabel;

function RenderDropdown(props: {
	label: string;
	children: JSX.Element;
	variant?: TriggerVariant;
	color?: TriggerColor;
	disabled?: boolean;
}) {
	return (
		<DropdownMenu>
			<DropdownMenu.Trigger
				variant={props.variant}
				color={props.color}
				disabled={props.disabled}
			>
				{props.label}
				<DropdownMenu.Icon>
					<ChevronDownIcon />
				</DropdownMenu.Icon>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content>
					{props.children}
					<DropdownMenu.Arrow />
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu>
	);
}

function RenderMixedMenu(props: { label: string; variant?: TriggerVariant; color?: TriggerColor; disabled?: boolean }) {
	const [bookmarked, setBookmarked] = createSignal(true);
	const [sort, setSort] = createSignal('activity');

	return (
		<RenderDropdown
			label={props.label}
			variant={props.variant}
			color={props.color}
			disabled={props.disabled}
		>
			<DropdownMenu.CheckboxItem
				checked={bookmarked()}
				onChange={setBookmarked}
			>
				<DropdownMenu.ItemIndicator>
					<CheckIcon />
				</DropdownMenu.ItemIndicator>
				Bookmarked
			</DropdownMenu.CheckboxItem>

			<DropdownMenu.Separator />

			<DropdownMenu.Group>
				<DropdownMenu.GroupLabel>Library</DropdownMenu.GroupLabel>
				<DropdownMenu.Item>Open</DropdownMenu.Item>
				<DropdownMenu.Item>Duplicate</DropdownMenu.Item>
			</DropdownMenu.Group>

			<DropdownMenu.Separator />

			<DropdownMenu.RadioGroup
				value={sort()}
				onChange={setSort}
			>
				<DropdownMenu.GroupLabel>Sort By</DropdownMenu.GroupLabel>
				<DropdownMenu.RadioItem value="activity">
					<DropdownMenu.ItemIndicator>
						<DotFilledIcon />
					</DropdownMenu.ItemIndicator>
					Recent activity
				</DropdownMenu.RadioItem>
				<DropdownMenu.RadioItem value="name">
					<DropdownMenu.ItemIndicator>
						<DotFilledIcon />
					</DropdownMenu.ItemIndicator>
					Name
				</DropdownMenu.RadioItem>
			</DropdownMenu.RadioGroup>

			<DropdownMenu.Separator />

			<DropdownMenu.Sub>
				<DropdownMenu.SubTrigger>
					Share
					<DropdownMenu.ItemRightSlot>
						<ChevronRightIcon />
					</DropdownMenu.ItemRightSlot>
				</DropdownMenu.SubTrigger>

				<DropdownMenu.Portal>
					<DropdownMenu.SubContent>
						<DropdownMenu.Item>Copy link</DropdownMenu.Item>
						<DropdownMenu.Item>Email invite</DropdownMenu.Item>
					</DropdownMenu.SubContent>
				</DropdownMenu.Portal>
			</DropdownMenu.Sub>
		</RenderDropdown>
	);
}

export const Default: Story = {
	render: (args: DropdownStoryArgs) => (
		<RenderMixedMenu
			label="Actions"
			variant={args.triggerVariant}
			color={args.triggerColor}
			disabled={args.triggerDisabled}
		/>
	),
};

export const Gallery: Story = {
	parameters: {
		layout: 'centered',
	},
	render: () => {
		const gridStyle = {
			display: 'grid',
			'grid-template-columns': 'auto repeat(4, auto)',
			gap: '1rem',
		};
		const rowStyle = { display: 'grid', 'grid-column': '1/-1', 'grid-template-columns': 'subgrid' };
		const labelStyle = { 'align-self': 'center' };

		return (
			<div style={gridStyle}>
				<div style={rowStyle}>
					<div style={labelStyle}></div>
					<div>Primary</div>
					<div>Secondary</div>
					<div>Success</div>
					<div>Danger</div>
				</div>

				<div style={rowStyle}>
					<div style={labelStyle}>Solid</div>
					<RenderMixedMenu
						label={`${variantLabel.solid} ${colorLabel.primary}`}
						variant="solid"
						color="primary"
					/>
					<RenderMixedMenu
						label={`${variantLabel.solid} ${colorLabel.secondary}`}
						variant="solid"
						color="secondary"
					/>
					<RenderMixedMenu
						label={`${variantLabel.solid} ${colorLabel.success}`}
						variant="solid"
						color="success"
					/>
					<RenderMixedMenu
						label={`${variantLabel.solid} ${colorLabel.danger}`}
						variant="solid"
						color="danger"
					/>
				</div>

				<div style={rowStyle}>
					<div style={labelStyle}>Light</div>
					<RenderMixedMenu
						label={`${variantLabel.light} ${colorLabel.primary}`}
						variant="light"
						color="primary"
					/>
					<RenderMixedMenu
						label={`${variantLabel.light} ${colorLabel.secondary}`}
						variant="light"
						color="secondary"
					/>
					<RenderMixedMenu
						label={`${variantLabel.light} ${colorLabel.success}`}
						variant="light"
						color="success"
					/>
					<RenderMixedMenu
						label={`${variantLabel.light} ${colorLabel.danger}`}
						variant="light"
						color="danger"
					/>
				</div>

				<div style={rowStyle}>
					<div style={labelStyle}>Ghost</div>
					<RenderMixedMenu
						label={`${variantLabel.ghost} ${colorLabel.primary}`}
						variant="ghost"
						color="primary"
					/>
					<RenderMixedMenu
						label={`${variantLabel.ghost} ${colorLabel.secondary}`}
						variant="ghost"
						color="secondary"
					/>
					<RenderMixedMenu
						label={`${variantLabel.ghost} ${colorLabel.success}`}
						variant="ghost"
						color="success"
					/>
					<RenderMixedMenu
						label={`${variantLabel.ghost} ${colorLabel.danger}`}
						variant="ghost"
						color="danger"
					/>
				</div>
			</div>
		);
	},
};

export const ItemsOnly: Story = {
	render: () => (
		<RenderDropdown label="File Actions">
			<DropdownMenu.Item>Open</DropdownMenu.Item>
			<DropdownMenu.Item>Rename</DropdownMenu.Item>
			<DropdownMenu.Item>Duplicate</DropdownMenu.Item>
			<DropdownMenu.Item>Archive</DropdownMenu.Item>
		</RenderDropdown>
	),
};

export const CheckboxOnly: Story = {
	render: () => {
		const [notifications, setNotifications] = createSignal(true);
		const [autosave, setAutosave] = createSignal(false);
		const [presence, setPresence] = createSignal(true);

		return (
			<RenderDropdown label="Preferences">
				<DropdownMenu.CheckboxItem
					checked={notifications()}
					onChange={setNotifications}
				>
					<DropdownMenu.ItemIndicator>
						<CheckIcon />
					</DropdownMenu.ItemIndicator>
					Notifications
				</DropdownMenu.CheckboxItem>
				<DropdownMenu.CheckboxItem
					checked={autosave()}
					onChange={setAutosave}
				>
					<DropdownMenu.ItemIndicator>
						<CheckIcon />
					</DropdownMenu.ItemIndicator>
					Autosave drafts
				</DropdownMenu.CheckboxItem>
				<DropdownMenu.CheckboxItem
					checked={presence()}
					onChange={setPresence}
				>
					<DropdownMenu.ItemIndicator>
						<CheckIcon />
					</DropdownMenu.ItemIndicator>
					Show presence
				</DropdownMenu.CheckboxItem>
			</RenderDropdown>
		);
	},
};

export const RadioOnly: Story = {
	render: () => {
		const [density, setDensity] = createSignal('comfortable');

		return (
			<RenderDropdown label="Density">
				<DropdownMenu.RadioGroup
					value={density()}
					onChange={setDensity}
				>
					<DropdownMenu.RadioItem value="compact">
						<DropdownMenu.ItemIndicator>
							<DotFilledIcon />
						</DropdownMenu.ItemIndicator>
						Compact
					</DropdownMenu.RadioItem>
					<DropdownMenu.RadioItem value="comfortable">
						<DropdownMenu.ItemIndicator>
							<DotFilledIcon />
						</DropdownMenu.ItemIndicator>
						Comfortable
					</DropdownMenu.RadioItem>
					<DropdownMenu.RadioItem value="spacious">
						<DropdownMenu.ItemIndicator>
							<DotFilledIcon />
						</DropdownMenu.ItemIndicator>
						Spacious
					</DropdownMenu.RadioItem>
				</DropdownMenu.RadioGroup>
			</RenderDropdown>
		);
	},
};

export const MultipleSubmenus: Story = {
	render: () => (
		<RenderDropdown label="Workspace">
			<DropdownMenu.Sub>
				<DropdownMenu.SubTrigger>
					Share
					<DropdownMenu.ItemRightSlot>
						<ChevronRightIcon />
					</DropdownMenu.ItemRightSlot>
				</DropdownMenu.SubTrigger>
				<DropdownMenu.Portal>
					<DropdownMenu.SubContent>
						<DropdownMenu.Item>Copy link</DropdownMenu.Item>
						<DropdownMenu.Item>Invite by email</DropdownMenu.Item>
					</DropdownMenu.SubContent>
				</DropdownMenu.Portal>
			</DropdownMenu.Sub>

			<DropdownMenu.Sub>
				<DropdownMenu.SubTrigger>
					Move
					<DropdownMenu.ItemRightSlot>
						<ChevronRightIcon />
					</DropdownMenu.ItemRightSlot>
				</DropdownMenu.SubTrigger>
				<DropdownMenu.Portal>
					<DropdownMenu.SubContent>
						<DropdownMenu.Item>Backlog</DropdownMenu.Item>
						<DropdownMenu.Item>In Progress</DropdownMenu.Item>
						<DropdownMenu.Item>Done</DropdownMenu.Item>
					</DropdownMenu.SubContent>
				</DropdownMenu.Portal>
			</DropdownMenu.Sub>

			<DropdownMenu.Sub>
				<DropdownMenu.SubTrigger>
					Export
					<DropdownMenu.ItemRightSlot>
						<ChevronRightIcon />
					</DropdownMenu.ItemRightSlot>
				</DropdownMenu.SubTrigger>
				<DropdownMenu.Portal>
					<DropdownMenu.SubContent>
						<DropdownMenu.Item>CSV</DropdownMenu.Item>
						<DropdownMenu.Item>JSON</DropdownMenu.Item>
						<DropdownMenu.Item>Markdown</DropdownMenu.Item>
					</DropdownMenu.SubContent>
				</DropdownMenu.Portal>
			</DropdownMenu.Sub>
		</RenderDropdown>
	),
};

export const NestedSubmenuLevels: Story = {
	render: () => (
		<RenderDropdown label="Deploy">
			<DropdownMenu.Item>Overview</DropdownMenu.Item>

			<DropdownMenu.Sub>
				<DropdownMenu.SubTrigger>
					Main
					<DropdownMenu.ItemRightSlot>
						<ChevronRightIcon />
					</DropdownMenu.ItemRightSlot>
				</DropdownMenu.SubTrigger>
				<DropdownMenu.Portal>
					<DropdownMenu.SubContent>
						<DropdownMenu.Item>Main action</DropdownMenu.Item>

						<DropdownMenu.Sub>
							<DropdownMenu.SubTrigger>
								Sub 1
								<DropdownMenu.ItemRightSlot>
									<ChevronRightIcon />
								</DropdownMenu.ItemRightSlot>
							</DropdownMenu.SubTrigger>
							<DropdownMenu.Portal>
								<DropdownMenu.SubContent>
									<DropdownMenu.Item>Sub 1 action</DropdownMenu.Item>

									<DropdownMenu.Sub>
										<DropdownMenu.SubTrigger>
											Sub 2
											<DropdownMenu.ItemRightSlot>
												<ChevronRightIcon />
											</DropdownMenu.ItemRightSlot>
										</DropdownMenu.SubTrigger>
										<DropdownMenu.Portal>
											<DropdownMenu.SubContent>
												<DropdownMenu.Item>Run deploy</DropdownMenu.Item>
												<DropdownMenu.Item>View logs</DropdownMenu.Item>
												<DropdownMenu.Item>Rollback</DropdownMenu.Item>
											</DropdownMenu.SubContent>
										</DropdownMenu.Portal>
									</DropdownMenu.Sub>
								</DropdownMenu.SubContent>
							</DropdownMenu.Portal>
						</DropdownMenu.Sub>
					</DropdownMenu.SubContent>
				</DropdownMenu.Portal>
			</DropdownMenu.Sub>
		</RenderDropdown>
	),
};

export const DisabledStates: Story = {
	parameters: {
		layout: 'centered',
	},
	render: () => {
		const [notifications, setNotifications] = createSignal(true);

		const layoutStyle = {
			display: 'grid',
			'grid-template-columns': 'repeat(2, max-content)',
			gap: '1.5rem',
			'align-items': 'start',
		};

		return (
			<div style={layoutStyle}>
				<RenderMixedMenu
					label="Disabled Trigger"
					color="secondary"
					disabled
				/>

				<RenderDropdown label="Disabled Items">
					<DropdownMenu.Item>Open</DropdownMenu.Item>
					<DropdownMenu.Item disabled>Rename</DropdownMenu.Item>
					<DropdownMenu.CheckboxItem
						checked={notifications()}
						onChange={setNotifications}
					>
						<DropdownMenu.ItemIndicator>
							<CheckIcon />
						</DropdownMenu.ItemIndicator>
						Notifications
					</DropdownMenu.CheckboxItem>
					<DropdownMenu.CheckboxItem disabled>
						<DropdownMenu.ItemIndicator>
							<CheckIcon />
						</DropdownMenu.ItemIndicator>
						Locked preference
					</DropdownMenu.CheckboxItem>
					<DropdownMenu.Separator />
					<DropdownMenu.Sub>
						<DropdownMenu.SubTrigger disabled>
							Admin tools
							<DropdownMenu.ItemRightSlot>
								<ChevronRightIcon />
							</DropdownMenu.ItemRightSlot>
						</DropdownMenu.SubTrigger>
						<DropdownMenu.Portal>
							<DropdownMenu.SubContent>
								<DropdownMenu.Item>Should stay unreachable</DropdownMenu.Item>
							</DropdownMenu.SubContent>
						</DropdownMenu.Portal>
					</DropdownMenu.Sub>
				</RenderDropdown>
			</div>
		);
	},
};
