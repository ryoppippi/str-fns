import { createBundle } from 'dts-buddy';

await createBundle({
	project: 'tsconfig.json',
	output: 'dist/index.d.ts',
	modules: {
		'str-fns': 'src/index.ts'
	}
});
