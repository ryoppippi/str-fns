// @ts-strict

/**
 * @template {Readonly<string>} T
 * @typedef {import('type-fest').IsStringLiteral<T> extends true ? Capitalize<T> : string} CapitalizedString<T>
 */

/**
 * @description capitalize first letter of string
 *
 * @template {Readonly<string>} T
 *
 * @param {T} input - input string to capitalize. type should be matched to T
 *
 * @returns {CapitalizedString<T>}
 *
 * @example
 * capitalize('a') // returns 'A'
 *
 * @example
 * capitalize('abc') // returns 'Abc'
 *
 * @example
 * capitalize('') // returns ''
 *
 */
export function capitalize(input) {
	const [first, ...rest] = input;
	return /** @type {CapitalizedString<T>} */ (`${first?.toUpperCase() ?? ''}${rest.join('')}`);
}
