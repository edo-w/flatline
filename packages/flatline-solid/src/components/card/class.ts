export const cardClass = {
	root: 'fl-card',
	rootGapVar: '--fl-card-gap',
	header: 'fl-card_header',
	title: 'fl-card_title',
	titleColor: {
		primary: '--color-primary',
		secondary: '--color-secondary',
		success: '--color-success',
		danger: '--color-danger',
	},
	subtitle: 'fl-card_subtitle',
	action: 'fl-card_action',
	content: 'fl-card_content',
	contentGapVar: '--fl-card-content-gap',
	footer: 'fl-card_footer',
	footerGapVar: '--fl-card-footer-gap',
	footerJustify: {
		left: '--justify-left',
		center: '--justify-center',
		right: '--justify-right',
		'space-between': '--justify-space-between',
		'space-around': '--justify-space-around',
		'space-evenly': '--justify-space-evenly',
	},
} as const;

export type CardTitleColor = keyof typeof cardClass.titleColor;
export type CardFooterJustify = keyof typeof cardClass.footerJustify;
