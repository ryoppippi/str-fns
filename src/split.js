// @ts-strict

/**
 * @template {Readonly<string>} T
 * @template {Readonly<string>} U
 * @typedef {import('type-fest').IsStringLiteral<T> extends true ? import('type-fest').Split<T,U> : string[]} SplitString<T,U>
 */

/**
 * @description Split string by separator
 *
 * @template {Readonly<string>} T
 *
 * @template {Readonly<string>} U
 *
 * @param {T} input - string to split. type should be matched to T
 *
 * @param {U} separator - separator to split string. type should be matched to U
 *
 * @returns {SplitString<T,U>}
 *
 * @example
 * split('Abc', 'b') // returns ['A', 'c']
 *
 * @example
 * split('a-b-c', '-') // returns ['a', 'b', 'c']
 *
 * @example
 * split('a-b-c', '') // returns ['a', '-', 'b', '-', 'c']
 *
 * @example
 * split('a-b-c', '$') // returns ['a-b-c']
 *
 */
export function split(input, separator) {
	return /** @type {SplitString<T,U>} */ input.split(separator);
}

if (import.meta.vitest != null) {
	const { describe, it, expect } = import.meta.vitest;
	describe('split test', () => {
		it('should split a string into an array', () => {
			const before = /** @type {const} */ ('abc');
			const splitted = split(before, '');
			const expected = /** @satisfies {typeof splitted} */ (['a', 'b', 'c']);
			expect(splitted).toEqual(expected);
		});
		it('should split a string into an array', () => {
			const before = /** @type {const} */ ('a-b-c');
			const splitted = split(before, '-');
			const expected = /** @satisfies {typeof splitted} */ (['a', 'b', 'c']);
			expect(splitted).toEqual(expected);
		});
		it('should split a string into an array', () => {
			const before = /** @type {const} */ ('a-b-c');
			const splitted = split(before, '');
			const expected = /** @satisfies {typeof splitted} */ (['a', '-', 'b', '-', 'c']);
			expect(splitted).toEqual(expected);
		});
		it('should split a string into an array', () => {
			const before = /** @type {const} */ ('a-b-c');
			const splitted = split(before, '$');
			const expected = /** @satisfies {typeof splitted} */ (['a-b-c']);
			expect(splitted).toEqual(expected);
		});
	});
}
