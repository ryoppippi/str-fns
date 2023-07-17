import { defineConfig } from 'vitest/config';

export default defineConfig({
	define: {
		'import.meta.vitest': false
	},
	test: {
		includeSource: ['src/**/*.test.{js,ts}'],
		typecheck: {
			include: ['src/**/*.{js,ts}'],
			allowJs: true
		},
		coverage: {
			reporter: ['html', 'text', 'json-summary', 'json']
		}
	}
});
