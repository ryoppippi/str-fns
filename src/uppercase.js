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

if (import.meta.vitest != null) {
	const { describe, it, expect } = import.meta.vitest;
	describe('uppercase test', () => {
		it('should uppercase one letter', () => {
			const before = /** @type {const} */ ('a');
			const uppercased = uppercase(before);
			const expected = /** @satisfies {typeof uppercased} */ ('A');
			expect(uppercased).toBe(expected);
		});
		it('should uppercase a word', () => {
			const before = /** @type {const} */ ('abc');
			const uppercased = uppercase(before);
			const expected = /** @satisfies {typeof uppercased} */ ('ABC');
			expect(uppercased).toBe(expected);
		});
		it('should uppercase a sentence', () => {
			const before = /** @type {const} */ ('');
			const uppercased = uppercase(before);
			const expected = /** @satisfies {typeof uppercased} */ ('');
			expect(uppercased).toBe(expected);
		});
		it('should empty string', () => {
			const before = /** @type {const} */ ('');
			const uppercased = uppercase(before);
			const expected = /** @satisfies {typeof uppercased} */ ('');
			expect(uppercased).toBe(expected);
		});
	});
}
