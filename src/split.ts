import type { IsStringLiteral, Split } from "type-fest";

type SplitString<
	T extends Readonly<string>,
	U extends Readonly<string>,
> = IsStringLiteral<T> extends true
	? Readonly<Split<T, U>>
	: Readonly<string[]>;

/**
 * @description Split string by separator
 *
 * @param input - string to split. type should be matched to T
 *
 * @param separator - separator to split string. type should be matched to U
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
	separator: U,
): SplitString<T, U> {
	return input.split(separator);
}
