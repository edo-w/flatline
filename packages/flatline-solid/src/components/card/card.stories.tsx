import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { Button } from '../button';
import { Card, type CardProps } from './card';
import type { CardFooterJustify, CardTitleColor } from './class';
import { splitProps } from 'solid-js';

type CardStoryArgs = Omit<CardProps, 'gap'> & {
	cardGap?: number | string;
	titleColor?: CardTitleColor;
	contentGap?: number | string;
	footerGap?: number | string;
	footerJustify?: CardFooterJustify;
};

const meta: Meta<CardStoryArgs> = {
	title: 'Card',
	component: Card,
	parameters: {
		layout: 'centered',
		controls: {
			exclude: ['gap', 'use:eventListener']
		}
	},
	args: {
		cardGap: '6',
		titleColor: 'primary',
		contentGap: '0',
		footerGap: '2',
		footerJustify: 'left',
	},
	argTypes: {
		cardGap: {
			control: 'text'
		},
		titleColor: {
			control: 'select',
			options: ['primary', 'secondary', 'success', 'danger']
		},
		contentGap: {
			control: 'text'
		},
		footerGap: {
			control: 'text'
		},
		footerJustify: {
			control: 'select',
			options: ['left', 'center', 'right', 'space-between', 'space-around', 'space-evenly']
		}
	}
};

export default meta;

type Story = StoryObj<typeof meta>;

function RenderCard(props: CardStoryArgs) {
	const [local] = splitProps(props, ['cardGap', 'titleColor', 'contentGap', 'footerGap', 'footerJustify']);

	return (
		<div style={{ width: '360px' }}>
			<Card gap={local.cardGap}>
				<Card.Header>
					<Card.Title color={local.titleColor}>Project Overview</Card.Title>
					<Card.Subtitle>Weekly status and next steps</Card.Subtitle>
					<Card.Action>
						<Button variant="ghost" color="secondary">Edit</Button>
					</Card.Action>
				</Card.Header>
				<Card.Content gap={local.contentGap}>
					<div>Launch checklist is 80% complete.</div>
					<div>Design QA is scheduled for tomorrow.</div>
					<div>Three follow-up items still need review.</div>
				</Card.Content>
				<Card.Footer gap={local.footerGap} justify={local.footerJustify}>
					<Button variant="light" color="secondary">Cancel</Button>
					<Button variant="solid" color="primary">Continue</Button>
				</Card.Footer>
			</Card>
		</div>
	);
}

export const Default: Story = {
	render: (args: CardStoryArgs) => <RenderCard {...args} />,
};

export const TitleColors: Story = {
	render: () => {
		const gridStyle = {
			display: 'grid',
			'grid-template-columns': 'repeat(2, minmax(0, 360px))',
			gap: '1rem',
		};

		return (
			<div style={gridStyle}>
				<RenderCard cardGap="6" titleColor="primary" contentGap="0" footerGap="2" footerJustify="left" />
				<RenderCard cardGap="6" titleColor="secondary" contentGap="0" footerGap="2" footerJustify="left" />
				<RenderCard cardGap="6" titleColor="success" contentGap="0" footerGap="2" footerJustify="left" />
				<RenderCard cardGap="6" titleColor="danger" contentGap="0" footerGap="2" footerJustify="left" />
			</div>
		);
	}
};

export const FooterJustify: Story = {
	parameters: {
		controls: {
			exclude: ['gap', 'use:eventListener']
		}
	},
	render: () => {
		const gridStyle = {
			display: 'grid',
			'grid-template-columns': 'repeat(2, minmax(0, 360px))',
			gap: '1rem',
		};

		return (
			<div style={gridStyle}>
				<RenderCard cardGap="6" titleColor="primary" contentGap="0" footerGap="2" footerJustify="left" />
				<RenderCard cardGap="6" titleColor="primary" contentGap="0" footerGap="2" footerJustify="center" />
				<RenderCard cardGap="6" titleColor="primary" contentGap="0" footerGap="2" footerJustify="right" />
				<RenderCard cardGap="6" titleColor="primary" contentGap="0" footerGap="2" footerJustify="space-between" />
			</div>
		);
	}
};
