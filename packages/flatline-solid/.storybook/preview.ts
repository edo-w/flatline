import { type Preview } from 'storybook-solidjs-vite';
import '../src/style/flatline.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	}
}

export default preview;
