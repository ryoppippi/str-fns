import type { IsStringLiteral } from 'type-fest';

type CapitalizedString<T extends Readonly<string>> = IsStringLiteral<T> extends true
	? Capitalize<T>
	: string;

/**
 * @description capitalize first letter of string
 *
 * @template {Readonly<string>} T
 *
 * @param input - input string to capitalize. type should be matched to T
 *
 * @returns capitalized string
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
export function capitalize<T extends Readonly<string>>(input: T): CapitalizedString<T> {
	const [first, ...rest] = input;
	return [first?.toUpperCase(), ...rest].join('');
}

if (import.meta.vitest != null) {
	const { describe, it, expect } = import.meta.vitest;
	describe('capitalize test', () => {
		it('should capitalize one lowercase letter', () => {
			const before = /** @type {const} */ 'a';
			const capitalized = capitalize(before);
			const expected = /** @satisfies {typeof capitalized} */ 'A';
			expect(capitalized).toBe(expected);
		});
		it('should capitalize one uppercase letter', () => {
			const before = /** @type {const} */ 'A';
			const capitalized = capitalize(before);
			const expected = /** @satisfies {typeof capitalized} */ 'A';
			expect(capitalized).toBe(expected);
		});
		it('should capitalize multiple letters', () => {
			const before = /** @type {const} */ 'abc';
			const capitalized = capitalize(before);
			const expected = /** @satisfies {typeof capitalized} */ 'Abc';
			expect(capitalized).toBe(expected);
		});
		it('should capitalize empty string', () => {
			const before = /** @type {const} */ '';
			const capitalized = capitalize(before);
			const expected = /** @satisfies {typeof before} */ '';
			expect(capitalized).toBe(expected);
		});
	});
}
