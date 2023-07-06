# str-fns

[![npm version](https://badge.fury.io/js/str-fns.svg)](https://badge.fury.io/js/str-fns)
[![.github/workflows/ci.yml](https://github.com/ryoppippi/str-fns/actions/workflows/ci.yml/badge.svg)](https://github.com/ryoppippi/str-fns/actions/workflows/ci.yml)

A collection of type-safe string functions written in pure JavaScript + JSDoc.

## Why str-fns

- I copy and paste useful functions from my notepad for every project using TypeScript/JavaScript. This library is a library of those functions.
- I need some useful functions to deal with `string` types in my projects. This library is a collection of those functions with type-safety.

## Why JavaScript + JSDoc / Why not TypeScript

[As Svelte team said](https://github.com/sveltejs/svelte/pull/8569), TypeScript is a great tool for library authors, but not for library users.  
One of the reasons is that it is hard to jump to the definition of a function when using TypeScript.  
I want to make it easy to jump to the definition of a function, so I use JavaScript.  
Don't worry, I use JSDoc to make it type-safe.

## API

- [`capitalize`](src/capitalize.js) - Capitalize the first letter of a string.
- [`uncapitalize`](src/uncapitalize.js) - Uncapitalize the first letter of a string.
- [`uppercase`](src/uppercase.js) - Convert a string to uppercase.
- [`lowercase`](src/lowercase.js) - Convert a string to lowercase.

## Related Works

- [native-dash](https://github.com/yankeeinlondon/native-dash)
- [type-fest](https://github.com/sindresorhus/type-fest)
