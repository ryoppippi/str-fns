import type { IsStringLiteral, Split } from 'type-fest';

type SplitString<
	T extends Readonly<string>,
	U extends Readonly<string>
> = IsStringLiteral<T> extends true ? Split<T, U> : string[];

/**
 * @description Split string by separator
 *
 * @param input - string to split. type should be matched to T
 *
 * @param separator - separator to split string. type should be matched to U
 *
 * @returns splitted string array
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
export function split<T extends Readonly<string>, U extends Readonly<string>>(
	input: T,
	separator: U
): SplitString<T, U> {
	return input.split(separator);
}

if (import.meta.vitest != null) {
	const { describe, it, expect } = import.meta.vitest;
	describe('split test', () => {
		it('should split a string into an array', () => {
			const before = /** @type {const} */ 'abc';
			const splitted = split(before, '');
			const expected = /** @satisfies {typeof splitted} */ ['a', 'b', 'c'];
			expect(splitted).toEqual(expected);
		});
		it('should split a string into an array', () => {
			const before = /** @type {const} */ 'a-b-c';
			const splitted = split(before, '-');
			const expected = /** @satisfies {typeof splitted} */ ['a', 'b', 'c'];
			expect(splitted).toEqual(expected);
		});
		it('should split a string into an array', () => {
			const before = /** @type {const} */ 'a-b-c';
			const splitted = split(before, '');
			const expected = /** @satisfies {typeof splitted} */ ['a', '-', 'b', '-', 'c'];
			expect(splitted).toEqual(expected);
		});
		it('should split a string into an array', () => {
			const before = /** @type {const} */ 'a-b-c';
			const splitted = split(before, '$');
			const expected = /** @satisfies {typeof splitted} */ ['a-b-c'];
			expect(splitted).toEqual(expected);
		});
	});
}
