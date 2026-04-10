import { defineMain } from 'storybook-solidjs-vite';

export default defineMain({
	stories: [
		"../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
	],
	addons: [],
	framework: "storybook-solidjs-vite",
	features: {
		sidebarOnboardingChecklist: false
	}
})

