import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { Dialog, type DialogRootProps } from './dialog';
import type { DialogContentSize } from './class';
import { splitProps } from 'solid-js';

type DialogStoryArgs = DialogRootProps & {
	size?: DialogContentSize;
};

function CloseIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			width="16"
			height="16"
		>
			<path d="M18 6 6 18" />
			<path d="m6 6 12 12" />
		</svg>
	);
}

const meta: Meta<DialogStoryArgs> = {
	title: 'Dialog',
	component: Dialog,
	parameters: {
		controls: {
			exclude: ['use:eventListener'],
		},
	},
	args: {
		modal: true,
		defaultOpen: false,
		size: 'md',
	},
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
		open: {
			table: {
				disable: true,
			},
		},
		onOpenChange: {
			table: {
				disable: true,
			},
		},
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg', 'xl', '2xl'],
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

function RenderDialog(props: DialogStoryArgs) {
	const [local, rest] = splitProps(props, ['size']);

	return (
		<Dialog {...rest}>
			<Dialog.Trigger>Open</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay />
				<Dialog.Positioner>
					<Dialog.Content size={local.size}>
						<Dialog.Header>
							<Dialog.Title>About Flatline</Dialog.Title>
							<Dialog.CloseButton>
								<CloseIcon />
							</Dialog.CloseButton>
						</Dialog.Header>
						<Dialog.Description>
							Flatline Solid provides styled primitives built on accessible Kobalte components, using the same design
							tokens and class naming conventions as the rest of the package.
						</Dialog.Description>
					</Dialog.Content>
				</Dialog.Positioner>
			</Dialog.Portal>
		</Dialog>
	);
}

function RenderTrigger(props: {
	variant: 'solid' | 'light' | 'ghost';
	color: 'primary' | 'secondary' | 'success' | 'danger';
	size?: DialogContentSize;
}) {
	const label = `${variantLabel[props.variant]} ${colorLabel[props.color]}`;

	return (
		<Dialog>
			<Dialog.ButtonTrigger
				variant={props.variant}
				color={props.color}
			>
				{label}
			</Dialog.ButtonTrigger>
			<Dialog.Portal>
				<Dialog.Overlay />
				<Dialog.Positioner>
					<Dialog.Content size={props.size}>
						<Dialog.Header>
							<Dialog.Title>{label}</Dialog.Title>
							<Dialog.CloseButton>
								<CloseIcon />
							</Dialog.CloseButton>
						</Dialog.Header>
						<Dialog.Description>
							This trigger uses the flatline-solid Button component through the dialog wrapper, so consumers do not need
							to pass an `as` prop directly.
						</Dialog.Description>
					</Dialog.Content>
				</Dialog.Positioner>
			</Dialog.Portal>
		</Dialog>
	);
}

export const Default: Story = {
	render: (args: DialogStoryArgs) => <RenderDialog {...args} />,
	args: {},
};

export const InitiallyOpen: Story = {
	render: (args: DialogStoryArgs) => <RenderDialog {...args} />,
	args: {
		defaultOpen: true,
	},
};

export const Gallery: Story = {
	parameters: {
		layout: 'centered',
	},
	render: (args: DialogStoryArgs) => {
		const [local] = splitProps(args, ['size']);

		const gridStyle = {
			display: 'grid',
			'grid-template-columns': 'auto repeat(4, auto)',
			gap: '1rem',
		};
		const rowStyle = { display: 'grid', 'grid-column': '1/-1', 'grid-template-columns': 'subgrid' };
		const labelStyle = { 'align-self': 'center' };

		return (
			<div>
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
						<RenderTrigger
							variant="solid"
							color="primary"
							size={local.size}
						/>
						<RenderTrigger
							variant="solid"
							color="secondary"
							size={local.size}
						/>
						<RenderTrigger
							variant="solid"
							color="success"
							size={local.size}
						/>
						<RenderTrigger
							variant="solid"
							color="danger"
							size={local.size}
						/>
					</div>

					<div style={rowStyle}>
						<div style={labelStyle}>Light</div>
						<RenderTrigger
							variant="light"
							color="primary"
							size={local.size}
						/>
						<RenderTrigger
							variant="light"
							color="secondary"
							size={local.size}
						/>
						<RenderTrigger
							variant="light"
							color="success"
							size={local.size}
						/>
						<RenderTrigger
							variant="light"
							color="danger"
							size={local.size}
						/>
					</div>

					<div style={rowStyle}>
						<div style={labelStyle}>Ghost</div>
						<RenderTrigger
							variant="ghost"
							color="primary"
							size={local.size}
						/>
						<RenderTrigger
							variant="ghost"
							color="secondary"
							size={local.size}
						/>
						<RenderTrigger
							variant="ghost"
							color="success"
							size={local.size}
						/>
						<RenderTrigger
							variant="ghost"
							color="danger"
							size={local.size}
						/>
					</div>
				</div>
			</div>
		);
	},
};
