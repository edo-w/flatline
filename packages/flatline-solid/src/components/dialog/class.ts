export const dialogClass = {
	trigger: 'fl-dialog_trigger',
	overlay: 'fl-dialog_overlay',
	positioner: 'fl-dialog_positioner',
	content: 'fl-dialog_content',
	contentSize: {
		sm: '--size-sm',
		md: '--size-md',
		lg: '--size-lg',
		xl: '--size-xl',
		'2xl': '--size-2xl',
	},
	header: 'fl-dialog_header',
	closeButton: 'fl-dialog_close-button',
	title: 'fl-dialog_title',
	description: 'fl-dialog_description',
} as const;

export type DialogContentSize = keyof typeof dialogClass.contentSize;
