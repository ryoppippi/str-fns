import { defineConfig } from 'vitest/config';

export default defineConfig({
	define: {
		'import.meta.vitest': false
	},
	test: {
		includeSource: ['src/**/*.test.{js,ts}'],
		browser: {
			enabled: true,
			name: 'chrome',
			headless: true
		}
	}
});
