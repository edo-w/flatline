import type { StoryObj, Meta } from 'storybook-solidjs-vite';
import { YStack } from './ystack';

function Box(props: { children: string, w?: string, h?: string, auto?: boolean }) {
	return (
		<div style={{
			display: 'flex',
			'justify-content': 'center',
			'align-items': 'center',
			'background-color': 'whitesmoke',
			width: props.auto === true ? undefined : props.w ?? '50px',
			height: props.auto === true ? undefined : props.h ?? '50px',
			border: '1px solid lightgray'
		}}>
			{props.children}
		</div>
	);
}

const meta: Meta<typeof YStack> = {
	title: 'YStack',
	component: YStack,
	parameters: {
		layout: 'centered',
		controls: {
			exclude: ['use:eventListener']
		}
	},
	args: {
		children: [
			<Box>1</Box>,
			<Box>2</Box>,
			<Box>3</Box>,
		]
	},
	argTypes: {
		children: {
			table: {
				disable: true
			}
		},
		gap: {
			control: 'text',
		},
		align: {
			control: 'select',
			options: ['left', 'center', 'right', 'stretch'],
		}
	}
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const WithGap: Story = {
	args: {
		gap: '4'
	},
};

export const AlignLeft: Story = {
	args: {
		children: [
			<Box>50px</Box>,
			<Box w='25px'>25px</Box>,
			<Box>50px</Box>,
		],
		align: 'left',
		gap: '4'
	},
};

export const AlignCenter: Story = {
	args: {
		children: [
			<Box>50px</Box>,
			<Box w='25px'>25px</Box>,
			<Box>50px</Box>,
		],
		align: 'center',
		gap: '4'
	},
};

export const AlignRight: Story = {
	args: {
		children: [
			<Box>50px</Box>,
			<Box w='25px'>25px</Box>,
			<Box>50px</Box>,
		],
		align: 'right',
		gap: '4'
	},
};

export const AlignStretch: Story = {
	args: {
		children: [
			<Box>50px</Box>,
			<Box w='25px'>25px</Box>,
			<Box auto>stretch</Box>,
		],
		align: 'stretch',
		gap: '4'
	},
};
