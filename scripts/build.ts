import dts from "bun-plugin-dts";

await Bun.build({
	entrypoints: ["./src/index.js"],
	outdir: "./types",
	sourcemap: "external",
	plugins: [dts()],
});
