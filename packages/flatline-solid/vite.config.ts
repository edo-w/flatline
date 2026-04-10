import path from 'node:path';
import solid from 'vite-plugin-solid';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		solid(),
	],
	resolve: {
		alias: {
			'#src': path.resolve(__dirname, 'src'),
			'#test': path.resolve(__dirname, 'test'),
		},
	}
});
