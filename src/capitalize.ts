import type { IsStringLiteral } from "type-fest";

type CapitalizedString<T extends Readonly<string>> =
	IsStringLiteral<T> extends true ? Capitalize<T> : string;

/**
 * @description capitalize first letter of string
 *
 * @param input - input string to capitalize. type should be matched to T
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
export function capitalize<T extends Readonly<string>>(
	input: T,
): CapitalizedString<T> {
	const [first, ...rest] = input;
	return [first?.toUpperCase(), ...rest].join("");
}
