export const ystackClass = {
	root: 'fl-ystack',
	gapVar: '--fl-gap',
	align: {
		left: '--align-left',
		center: '--align-center',
		right: '--align-right',
		stretch: '--align-stretch'
	}
} as const;

export type YStackAlign = keyof typeof ystackClass.align;
