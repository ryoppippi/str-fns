#!/usr/bin/env node

import { createBundle } from "dts-buddy";

await createBundle({
	project: "tsconfig.json",
	output: "types/index.d.ts",
	modules: {
		"str-fns": "src/index.js",
	},
});
