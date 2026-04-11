export const xstackClass = {
	root: 'fl-xstack',
	garVar: '--fl-gap',
	align: {
		top: '--align-top',
		center: '--align-center',
		bottom: '--align-bottom',
		stretch: '--align-stretch',
		baseline: '--align-baseline',
	},
} as const;

export type XStackAlign = keyof typeof xstackClass.align;
