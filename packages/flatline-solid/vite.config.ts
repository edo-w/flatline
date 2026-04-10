import path from 'node:path';
import solid from 'vite-plugin-solid';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		solid(),
	],
	build: {
		lib: {
			entry: 'src/index.ts',
			formats: ['es']
		},
		cssCodeSplit: true,
		rollupOptions: {
			external: ['solid-js'],
			output: {
				preserveModules: true,
				preserveModulesRoot: 'src',
				entryFileNames: '[name].js',
			}
		}
	},
	resolve: {
		alias: {
			'#src': path.resolve(__dirname, 'src'),
			'#test': path.resolve(__dirname, 'test'),
		},
	}
});
