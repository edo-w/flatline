export const buttonClass = {
	root: 'fl-button',
	variant: {
		solid: '--variant-solid',
		light: '--variant-light',
		ghost: '--variant-ghost',
	},
	color: {
		primary: '--color-primary',
		secondary: '--color-secondary',
		success: '--color-success',
		danger: '--color-danger',
	},
} as const;

export type ButtonVariant = keyof typeof buttonClass.variant;
export type ButtonColor = keyof typeof buttonClass.color;
