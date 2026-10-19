// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://relaycore-projects.github.io',
	// Two languages: English at the root (/about/), Hungarian under /hu/ (/hu/about/).
	i18n: {
		locales: ['en', 'hu'],
		defaultLocale: 'en',
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
