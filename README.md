# str-fns

[![.github/workflows/ci.yaml](https://github.com/ryoppippi/str-fns/actions/workflows/ci.yaml/badge.svg)](https://github.com/ryoppippi/str-fns/actions/workflows/ci.yaml)
[![codecov](https://codecov.io/gh/ryoppippi/str-fns/graph/badge.svg?token=UZW583YFXB)](https://codecov.io/gh/ryoppippi/str-fns)
[![JSR Score](https://jsr.io/badges/@ryoppippi/str-fns/score)](https://jsr.io/@ryoppippi/str-fns)  
[![npm version](https://badgen.net/npm/v/str-fns)](https://www.npmjs.com/package/str-fns)
[![JSR](https://jsr.io/badges/@ryoppippi/str-fns)](https://jsr.io/@ryoppippi/str-fns)



A collection of type-safe string functions written in pure TypeScript.

## Why str-fns

- I copy and paste useful functions from my notepad for every project using
  TypeScript/JavaScript. This library is a library of those functions.
- I need some useful functions to deal with `string` types in my projects. This
  library is a collection of those functions with type-safety.

## API

- [`capitalize`](src/capitalize.ts) - Capitalize the first letter of a string.
- [`uncapitalize`](src/uncapitalize.ts) - Uncapitalize the first letter of a
  string.
- [`uppercase`](src/uppercase.ts) - Convert a string to uppercase.
- [`lowercase`](src/lowercase.ts) - Convert a string to lowercase.
- [`split`](src/split.ts) - Split a string into substrings using the specified
  separator and return them as an array.
- [`concat`](src/concat.ts) - Concatenate strings.

## Related Works

- [native-dash](https://github.com/yankeeinlondon/native-dash)
- [type-fest](https://github.com/sindresorhus/type-fest)

## License

MIT
