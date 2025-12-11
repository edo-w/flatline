import type { ReactNode } from 'react';
import preview from '../../../.storybook/preview';
import { XStack } from './index';

const meta = preview.meta({
	component: XStack,
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
				<Box h='25px'>25px</Box>
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
		gap: '4'
	}
});

export const AlignTop = meta.story({
	args: {
		children: (
			<>
				<Box>1</Box>
				<Box h='25px'>2</Box>
				<Box>3</Box>
			</>
		),
		align: 'top',
		gap: '4'
	}
});

export const AlignCenter = meta.story({
	args: {
		children: (
			<>
				<Box>1</Box>
				<Box h='25px'>2</Box>
				<Box>3</Box>
			</>
		),
		align: 'center',
		gap: '4'
	}
});

export const AlignBottom = meta.story({
	args: {
		children: (
			<>
				<Box>1</Box>
				<Box h='25px'>2</Box>
				<Box>3</Box>
			</>
		),
		align: 'bottom',
		gap: '4'
	}
});

export const AlignStretch = meta.story({
	args: {
		children: (
			<>
				<Box>50px</Box>
				<Box h='25px'>25px</Box>
				<Box fit>stretch</Box>
			</>
		),
		align: 'stretch',
		gap: '4'
	}
});

export const AlignBaseline = meta.story({
	args: {
		children: (
			<>
				<Box>50px</Box>
				<Box h='25px'>25px</Box>
				<Box fit>fit</Box>
			</>
		),
		align: 'baseline',
		gap: '4'
	}
});

export const JustifyLeft = meta.story({
	args: {
		children: (
			<>
				<Box>50px</Box>
				<Box w='75px'>75px</Box>
				<Box w='100px'>100px</Box>
			</>
		),
		justify: 'left',
		gap: '4'
	}
});

export const JustifyCenter = meta.story({
	args: {
		children: (
			<>
				<Box>50px</Box>
				<Box w='75px'>75px</Box>
				<Box w='100px'>100px</Box>
			</>
		),
		justify: 'center',
		gap: '4'
	}
});

export const JustifyRight = meta.story({
	args: {
		children: (
			<>
				<Box>50px</Box>
				<Box w='75px'>75px</Box>
				<Box w='100px'>100px</Box>
			</>
		),
		justify: 'right',
		gap: '4'
	}
});

export const JustifySpaceBetween = meta.story({
	args: {
		children: (
			<>
				<Box>50px</Box>
				<Box w='75px'>75px</Box>
				<Box w='100px'>100px</Box>
			</>
		),
		justify: 'space-between',
		gap: '4'
	}
});

export const JustifySpaceAround = meta.story({
	args: {
		children: (
			<>
				<Box>50px</Box>
				<Box w='75px'>75px</Box>
				<Box w='100px'>100px</Box>
			</>
		),
		justify: 'space-around',
		gap: '4'
	}
});

export const JustifySpaceEvenly = meta.story({
	args: {
		children: (
			<>
				<Box>50px</Box>
				<Box w='75px'>75px</Box>
				<Box w='100px'>100px</Box>
			</>
		),
		justify: 'space-evenly',
		gap: '4'
	}
});


