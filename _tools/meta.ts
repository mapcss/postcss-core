import { BuildOptions } from "https://deno.land/x/dnt@0.21.0/mod.ts";

export const makeOptions = (version: string): BuildOptions => ({
  test: false,
  shims: {
    deno: false,
  },
  typeCheck: true,
  entryPoints: ["./mod.js"],
  outDir: "./npm",
  package: {
    name: "postcss-core",
    version,
    description: "Universal, Tiny postcss",
    keywords: [
      "postcss",
      "css",
      "preprocessor",
      "universal",
      "transform",
      "transpiler",
    ],
    license: "MIT",
    homepage: "https://github.com/mapcss/postcss-core",
    repository: {
      type: "git",
      url: "git+https://github.com/mapcss/postcss-core.git",
    },
    bugs: {
      url: "https://github.com/mapcss/postcss-core/issues",
    },
    sideEffects: false,
    type: "module",
  },
});

export function cleanVersion(version: string): string {
  return version.replace(/^v(.+)$/, "$1");
}
