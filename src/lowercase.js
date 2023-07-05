// @ts-strict

/**
 * @template {Readonly<string>} T
 * @typedef {import('type-fest').IsStringLiteral<T> extends true ? Lowercase<T> : string} LowercaseString<T>
 */

/**
 * @description get lowercase string
 *
 * @template {Readonly<string>} T
 *
 * @param {T} input - input string to capitalize. type should be matched to T
 *
 * @returns {LowercaseString<T>}
 *
 * @example
 * toLowerCase('A') // 'a'
 *
 * @example
 * toLowerCase('aBC') // 'abc'
 *
 * @example
 * toLowerCase('') // ''
 *
 */
export function toLowerCase(input) {
	return /** @type {LowercaseString<T>} */ (input.toLowerCase());
}
