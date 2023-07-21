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

if (import.meta.vitest != null) {
	const { describe, it, expect } = import.meta.vitest;
	describe('lowercase test', () => {
		it('should lowercase one letter', () => {
			const before = /** @type {const} */ ('A');
			const lowercased = lowercase(before);
			const expected = /** @satisfies {typeof lowercased} */ ('a');
			expect(lowercased).toBe(expected);
		});
		it('should lowercase a word', () => {
			const before = /** @type {const} */ ('hEllO');
			const lowercased = lowercase(before);
			const expected = /** @satisfies {typeof lowercased} */ ('hello');
			expect(lowercased).toBe(expected);
		});
		it('should lowercase a sentence', () => {
			const before = /** @type {const} */ ('hellO wOrld');
			const lowercased = lowercase(before);
			const expected = /** @satisfies {typeof lowercased} */ ('hello world');
			expect(lowercased).toBe(expected);
		});
		it('should lowercase empty string', () => {
			const before = /** @type {const} */ ('');
			const lowercased = lowercase(before);
			const expected = /** @satisfies {typeof lowercased} */ ('');
			expect(lowercased).toBe(expected);
		});
	});
}
