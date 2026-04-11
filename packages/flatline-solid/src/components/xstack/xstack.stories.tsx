import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { XStack } from './xstack';

function Box(props: { children: string; w?: string; h?: string; auto?: boolean }) {
	return (
		<div
			style={{
				display: 'flex',
				'justify-content': 'center',
				'align-items': 'center',
				'background-color': 'whitesmoke',
				width: props.auto === true ? undefined : (props.w ?? '50px'),
				height: props.auto === true ? undefined : (props.h ?? '50px'),
				border: '1px solid lightgray',
			}}
		>
			{props.children}
		</div>
	);
}

const meta: Meta<typeof XStack> = {
	title: 'XStack',
	component: XStack,
	parameters: {
		layout: 'centered',
		controls: {
			exclude: ['use:eventListener'],
		},
	},
	args: {
		children: [<Box>1</Box>, <Box>2</Box>, <Box>3</Box>],
	},
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
		gap: {
			control: 'text',
		},
		align: {
			control: 'select',
			options: ['top', 'center', 'bottom', 'stretch', 'baseline'],
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const WithGap: Story = {
	args: {
		gap: '4',
	},
};

export const AlignTop: Story = {
	args: {
		children: [<Box>50px</Box>, <Box h="25px">25px</Box>, <Box>50px</Box>],
		align: 'top',
		gap: '4',
	},
};

export const AlignCenter: Story = {
	args: {
		children: [<Box>50px</Box>, <Box h="25px">25px</Box>, <Box>50px</Box>],
		align: 'center',
		gap: '4',
	},
};

export const AlignBottom: Story = {
	args: {
		children: [<Box>50px</Box>, <Box h="25px">25px</Box>, <Box>50px</Box>],
		align: 'bottom',
		gap: '4',
	},
};

export const AlignStretch: Story = {
	args: {
		children: [<Box>50px</Box>, <Box h="25px">25px</Box>, <Box auto>stretch</Box>],
		align: 'stretch',
		gap: '4',
	},
};

export const AlignBaseline: Story = {
	args: {
		children: [<Box>50px</Box>, <Box h="25px">25px</Box>, <Box auto>fit</Box>],
		align: 'baseline',
		gap: '4',
	},
};
