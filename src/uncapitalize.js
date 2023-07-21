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
	return /** @type {UncapitalizedString<T>} */ ([first?.toLowerCase(), ...rest].join(''));
}

if (import.meta.vitest != null) {
	const { describe, it, expect } = import.meta.vitest;
	describe('uncapitalize test', () => {
		it('should uncapitalize one letter', () => {
			const before = /** @type {const} */ ('A');
			const uncapitalized = uncapitalize(before);
			const expected = /** @satisfies {typeof uncapitalized} */ ('a');
			expect(uncapitalized).toBe(expected);
		});
		it('should uncapitalize a word', () => {
			const before = /** @type {const} */ ('a');
			const uncapitalized = uncapitalize(before);
			const expected = /** @satisfies {typeof uncapitalized} */ ('a');
			expect(uncapitalized).toBe(expected);
		});
		it('should uncapitalize a word', () => {
			const before = /** @type {const} */ ('Abc');
			const uncapitalized = uncapitalize(before);
			const expected = /** @satisfies {typeof uncapitalized} */ ('abc');
			expect(uncapitalized).toBe(expected);
		});
		it('should uncapitalize a sentence', () => {
			const before = /** @type {const} */ ('');
			const uncapitalized = uncapitalize(before);
			const expected = /** @satisfies {typeof uncapitalized} */ ('');
			expect(uncapitalized).toBe(expected);
		});
	});
}
