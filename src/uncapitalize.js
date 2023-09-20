// @ts-strict

/**
 * @template {Readonly<string>} T
 * @typedef {import('type-fest').IsStringLiteral<T> extends true ? Uncapitalize<T> : string} UncapitalizedString<T>
 */

/**
 * @description uncapitalize first letter of string
 *
 * @template {Readonly<string>} T
 *
 * @param {T} input - input string to capitalize. type should be matched to T
 *
 * @returns {UncapitalizedString<T>}
 *
 * @example
 * uncapitalize('A') // returns 'a'
 *
 * @example
 * uncapitalize('Abc') // returns 'abc'
 *
 * @example
 * uncapitalize('') // returns ''
 *
 */
export function uncapitalize(input) {
	const [first, ...rest] = input;
	return /** @type {UncapitalizedString<T>} */ (
		[first?.toLowerCase(), ...rest].join('')
	);
}
