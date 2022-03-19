export {
  basename,
  dirname,
  isAbsolute,
  join,
  relative,
  resolve,
  sep,
  fromFileUrl,
  toFileUrl,
} from "https://deno.land/std@0.130.0/path/mod.ts";

export { nanoid } from "https://deno.land/x/nanoid@v3.0.0/nanoid.ts";

import {
  bold,
  cyan,
  getColorEnabled,
  gray,
  green,
  magenta,
  red,
  yellow,
} from "https://deno.land/std@0.130.0/fmt/colors.ts";

export const pico = {
  isColorSupported: getColorEnabled(),
  createColors: () => ({ bold, red, gray }),
  cyan,
  gray,
  green,
  yellow,
  magenta,
};
