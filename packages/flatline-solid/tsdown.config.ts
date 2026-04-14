import { defineConfig } from 'tsdown';
import solid from 'unplugin-solid/rolldown';

export default defineConfig({
	exports: true,
	platform: 'neutral',
	dts: true,
	sourcemap: true,
	entry: [
		'src/index.ts',
		{
			'*': 'src/components/**/index.ts'
		}
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
