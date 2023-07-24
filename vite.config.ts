import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

const include = ['src/**/*.ts'];
const exclude = ['src/**/index.ts', 'tsconfig.json'];
export default defineConfig({
	define: {
		'import.meta.vitest': undefined
	},
	test: {
		include,
		exclude,
		includeSource: include,
		typecheck: {
			include
		},
		coverage: {
			reporter: ['html', 'text', 'json-summary', 'json']
		}
	},
	build: {
		target: 'esnext',
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			formats: ['es'],
			name: 'index',
			fileName: 'index'
		}
	}
});
