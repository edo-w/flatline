import preview from '../../../.storybook/preview';
import { YStack } from './index';
import type { ReactNode } from 'react';

const meta = preview.meta({
	component: YStack,
	argTypes: {
		children: {
			control: false,
			table: {  disable: true }
		},
		align: {
			control: 'select',
		},
		justify: {
			control: 'select',
		},
		gap: {
			control: 'number',
		}
	}
});

const Box = (props: { children?: ReactNode, w?: string, h?: string, fit?: boolean }) => (
	<div
		style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: 'whitesmoke',
			width: props.fit === true ? undefined : props.w ?? '50px',
			height: props.fit === true ? undefined : props.h ?? '50px',
			border: '1px solid lightgray',
		}}
	>
		{props.children}
	</div>
)

export const Default = meta.story({
	args: {
		children: (
			<>
				<Box>50px</Box>
				<Box w='25px'>25px</Box>
				<Box>50px</Box>
			</>
		),
	},
});

export const WithGap = meta.story({
	args: {
		children: (
			<>
				<Box>1</Box>
				<Box>2</Box>
				<Box>3</Box>
			</>
		),
		gap: 4
	},
});


