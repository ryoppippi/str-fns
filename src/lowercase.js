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
 * lowercase('A') // 'a'
 *
 * @example
 * lowercase('aBC') // 'abc'
 *
 * @example
 * lowercase('') // ''
 *
 */
export function lowercase(input) {
	return /** @type {LowercaseString<T>} */ (input.toLowerCase());
}
