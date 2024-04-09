import type { IsStringLiteral } from "type-fest";

type UppercaseString<T extends Readonly<string>> =
	IsStringLiteral<T> extends true ? Uppercase<T> : string;

/**
 * @description get uppercase string
 *
 * @param input - input string to capitalize. type should be matched to T
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
export function uppercase<T extends Readonly<string>>(
	input: T,
): UppercaseString<T> {
	return input.toUpperCase();
}
