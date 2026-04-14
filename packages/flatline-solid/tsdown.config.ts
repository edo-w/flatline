import { defineConfig } from 'tsdown';
import solid from 'unplugin-solid/rolldown';

export default defineConfig({
	exports: true,
	platform: 'neutral',
	dts: true,
	sourcemap: true,
	entry: [
		{
			'*': 'src/components/**/index.ts'
		},
		'src/style/flatline.css'
	],
	deps: {
		neverBundle: [/^solid-js\//],
		alwaysBundle: [/^clsx\//]
	},
	css: {
		inject: true,
		splitting: true
	},
	plugins: [
		solid()
	]
})
