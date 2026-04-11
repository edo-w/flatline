import { fn } from 'storybook/test';
import type { StoryObj, Meta } from 'storybook-solidjs-vite';
import { Button } from './button';

const meta: Meta<typeof Button> = {
	title: 'Button',
	component: Button,
	parameters: {
		layout: 'centered',
		controls: {
			exclude: ['use:eventListener'],
		},
	},
	args: {
		onClick: fn(),
		children: 'Button',
		variant: 'solid',
		color: 'primary',
	},
	argTypes: {
		children: {
			control: 'text',
		},
		variant: {
			control: 'select',
			options: ['solid', 'light'],
		},
		color: {
			control: 'select',
			options: ['primary', 'secondary', 'success', 'danger'],
		},
		onClick: {
			table: {
				disable: true,
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Gallery: Story = {
	render: () => {
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
						<Button variant="solid" color="primary">
							Solid Primary
						</Button>
						<Button variant="solid" color="secondary">
							Solid Secondary
						</Button>
						<Button variant="solid" color="success">
							Solid Success
						</Button>
						<Button variant="solid" color="danger">
							Solid Danger
						</Button>
					</div>

					<div style={rowStyle}>
						<div style={labelStyle}>Light</div>
						<Button variant="light" color="primary">
							Light Primary
						</Button>
						<Button variant="light" color="secondary">
							Light Secondary
						</Button>
						<Button variant="light" color="success">
							Light Success
						</Button>
						<Button variant="light" color="danger">
							Light Danger
						</Button>
					</div>

					<div style={rowStyle}>
						<div style={labelStyle}>Ghost</div>
						<Button variant="ghost" color="primary">
							Ghost Primary
						</Button>
						<Button variant="ghost" color="secondary">
							Ghost Secondary
						</Button>
						<Button variant="ghost" color="success">
							Ghost Success
						</Button>
						<Button variant="ghost" color="danger">
							Ghost Danger
						</Button>
					</div>
				</div>

				<hr style={{ 'margin-block': '2rem' }}></hr>

				<div style={gridStyle}>
					<div style={labelStyle}></div>

					<div style={rowStyle}>
						<div></div>
						<Button disabled variant="solid" color="primary">
							Solid Primary
						</Button>
						<Button disabled variant="solid" color="secondary">
							Solid Secondary
						</Button>
						<Button disabled variant="solid" color="success">
							Solid Success
						</Button>
						<Button disabled variant="solid" color="danger">
							Solid Danger
						</Button>
					</div>

					<div style={rowStyle}>
						<div></div>
						<Button disabled variant="light" color="primary">
							Light Primary
						</Button>
						<Button disabled variant="light" color="secondary">
							Light Secondary
						</Button>
						<Button disabled variant="light" color="success">
							Light Success
						</Button>
						<Button disabled variant="light" color="danger">
							Light Danger
						</Button>
					</div>

					<div style={rowStyle}>
						<div></div>
						<Button disabled variant="ghost" color="primary">
							Ghost Primary
						</Button>
						<Button disabled variant="ghost" color="secondary">
							Ghost Secondary
						</Button>
						<Button disabled variant="ghost" color="success">
							Ghost Success
						</Button>
						<Button disabled variant="ghost" color="danger">
							Ghost Danger
						</Button>
					</div>
				</div>
			</div>
		);
	},
};

export const SolidPrimary: Story = {
	args: {
		variant: 'solid',
		color: 'primary',
		children: 'Button',
	},
};

export const SolidSecondary: Story = {
	args: {
		variant: 'solid',
		color: 'secondary',
		children: 'Button',
	},
};

export const SolidSuccess: Story = {
	args: {
		variant: 'solid',
		color: 'success',
		children: 'Button',
	},
};

export const SolidDanger: Story = {
	args: {
		variant: 'solid',
		color: 'danger',
		children: 'Button',
	},
};

export const LightPrimary: Story = {
	args: {
		variant: 'light',
		color: 'primary',
		children: 'Button',
	},
};

export const LightSecondary: Story = {
	args: {
		variant: 'light',
		color: 'secondary',
		children: 'Button',
	},
};

export const LightSuccess: Story = {
	args: {
		variant: 'light',
		color: 'success',
		children: 'Button',
	},
};

export const LightDanger: Story = {
	args: {
		variant: 'light',
		color: 'danger',
		children: 'Button',
	},
};

export const GhostPrimary: Story = {
	args: {
		variant: 'ghost',
		color: 'primary',
		children: 'Button',
	},
};

export const GhostSecondary: Story = {
	args: {
		variant: 'ghost',
		color: 'secondary',
		children: 'Button',
	},
};

export const GhostSuccess: Story = {
	args: {
		variant: 'ghost',
		color: 'success',
		children: 'Button',
	},
};

export const GhostDanger: Story = {
	args: {
		variant: 'ghost',
		color: 'danger',
		children: 'Button',
	},
};

export const SolidDisabled: Story = {
	args: {
		variant: 'solid',
		color: 'primary',
		children: 'Button',
		disabled: true,
	},
};

export const LightDisabled: Story = {
	args: {
		variant: 'light',
		color: 'primary',
		children: 'Button',
		disabled: true,
	},
};
