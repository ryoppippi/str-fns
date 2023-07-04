// @ts-strict

/**
 * @template {Readonly<string>} T
 * @typedef {import('type-fest').IsStringLiteral<T> extends true ? Uppercase<T> : string} UppercaseString<T>
 */

/**
 * @description get uppercase string
 *
 * @template {Readonly<string>} T
 *
 * @param {T} input - input string to capitalize. type should be matched to T
 *
 * @returns {UppercaseString<T>}
 *
 * @example
 * uppercase('a') // 'A'
 *
 * @example
 * uppercase('abc') // 'Abc'
 *
 * @example
 * uppercase('') // ''
 *
 */
export function uppercase(input) {
	return /** @type {UppercaseString<T>} */ (input.toUpperCase());
}
