import { type Preview } from 'storybook-solidjs-vite';
import '../src/style/flatline.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
			disableSaveFromUI: true,
			exclude: ['use:eventListener']
		}
	}
}

export default preview;
