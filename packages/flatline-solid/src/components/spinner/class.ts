export const spinnerClass = {
	root: 'fl-spinner',
	svg: 'fl-spinner_svg',
	size: {
		sm: '--size-sm',
		md: '--size-md',
		lg: '--size-lg',
	},
} as const;

export type SpinnerSize = keyof typeof spinnerClass.size;
