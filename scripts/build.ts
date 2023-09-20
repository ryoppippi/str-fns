import dts from "bun-plugin-dts/src";

await Bun.build({
	entrypoints: ["./src/index.js"],
	outdir: "./types",
	sourcemap: "external",
	plugins: [dts()],
});
