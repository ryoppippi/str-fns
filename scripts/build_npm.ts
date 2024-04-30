import { build, emptyDir } from "@deno/dnt";

const name = "str-fns";
const version = Deno.args[0];
if (!version) {
  throw new Error("No version argument is specified");
}
console.log("*".repeat(80));
console.log(`${name} ${version}`);
console.log("*".repeat(80));

await emptyDir("./npm");

await build({
  typeCheck: false,
  test: false,
  entryPoints: ["src/index.ts"],
  importMap: "./import_map.json",
  outDir: "./npm",
  shims: {
    deno: "dev",
  },
  packageManager: "bun",
  package: {
    name,
    version,
    author: "@ryoppippi",
    license: "MIT",
    repository: "ryoppippi/str-fns",
  },
});

// post build steps
Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");
