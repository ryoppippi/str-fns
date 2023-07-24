import type { IsStringLiteral } from 'type-fest';

type UncapitalizeString<T extends Readonly<string>> = IsStringLiteral<T> extends true
	? Uncapitalize<T>
	: string;

/**
 * @description uncapitalize first letter of string
 *
 * @param input - input string to capitalize. type should be matched to T
 *
 * @returns uncapitalized string
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
export function uncapitalize<T extends Readonly<string>>(input: T): UncapitalizeString<T> {
	const [first, ...rest] = input;
	return [first?.toLowerCase(), ...rest].join('');
}

if (import.meta.vitest != null) {
	const { describe, it, expect } = import.meta.vitest;
	describe('uncapitalize test', () => {
		it('should uncapitalize one letter', () => {
			const before = /** @type {const} */ 'A';
			const uncapitalized = uncapitalize(before);
			const expected = /** @satisfies {typeof uncapitalized} */ 'a';
			expect(uncapitalized).toBe(expected);
		});
		it('should uncapitalize a word', () => {
			const before = /** @type {const} */ 'a';
			const uncapitalized = uncapitalize(before);
			const expected = /** @satisfies {typeof uncapitalized} */ 'a';
			expect(uncapitalized).toBe(expected);
		});
		it('should uncapitalize a word', () => {
			const before = /** @type {const} */ 'Abc';
			const uncapitalized = uncapitalize(before);
			const expected = /** @satisfies {typeof uncapitalized} */ 'abc';
			expect(uncapitalized).toBe(expected);
		});
		it('should uncapitalize a sentence', () => {
			const before = /** @type {const} */ '';
			const uncapitalized = uncapitalize(before);
			const expected = /** @satisfies {typeof uncapitalized} */ '';
			expect(uncapitalized).toBe(expected);
		});
	});
}
