import { defineConfig } from 'vitest/config';

const include = ['src/**/*.js'];
const exclude = ['src/index.js'];
export default defineConfig({
	define: {
		'import.meta.vitest': false
	},
	test: {
		include,
		exclude,
		includeSource: include,
		typecheck: {
			include,
			exclude,
			allowJs: true
		},
		coverage: {
			reporter: ['html', 'text', 'json-summary', 'json']
		}
	}
});
