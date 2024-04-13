# str-fns

[![npm version](https://badgen.net/npm/v/str-fns)](https://www.npmjs.com/package/str-fns)
[![.github/workflows/ci.yml](https://github.com/ryoppippi/str-fns/actions/workflows/ci.yml/badge.svg)](https://github.com/ryoppippi/str-fns/actions/workflows/ci.yml)

A collection of type-safe string functions written in pure JavaScript + JSDoc.

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

## Related Works

- [native-dash](https://github.com/yankeeinlondon/native-dash)
- [type-fest](https://github.com/sindresorhus/type-fest)
