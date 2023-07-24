import type { IsStringLiteral } from 'type-fest';

type LowercaseString<T extends Readonly<string>> = IsStringLiteral<T> extends true
	? Lowercase<T>
	: string;
/**
 * @description get lowercase string
 *
 * @param input - input string to capitalize. type should be matched to T
 *
 * @returns lowercase string
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
export function lowercase<T extends Readonly<string>>(input: T): LowercaseString<T> {
	return input.toLowerCase();
}

if (import.meta.vitest != null) {
	const { describe, it, expect } = import.meta.vitest;
	describe('lowercase test', () => {
		it('should lowercase one letter', () => {
			const before = /** @type {const} */ 'A';
			const lowercased = lowercase(before);
			const expected = /** @satisfies {typeof lowercased} */ 'a';
			expect(lowercased).toBe(expected);
		});
		it('should lowercase a word', () => {
			const before = /** @type {const} */ 'hEllO';
			const lowercased = lowercase(before);
			const expected = /** @satisfies {typeof lowercased} */ 'hello';
			expect(lowercased).toBe(expected);
		});
		it('should lowercase a sentence', () => {
			const before = /** @type {const} */ 'hellO wOrld';
			const lowercased = lowercase(before);
			const expected = /** @satisfies {typeof lowercased} */ 'hello world';
			expect(lowercased).toBe(expected);
		});
		it('should lowercase empty string', () => {
			const before = /** @type {const} */ '';
			const lowercased = lowercase(before);
			const expected = /** @satisfies {typeof lowercased} */ '';
			expect(lowercased).toBe(expected);
		});
	});
}
