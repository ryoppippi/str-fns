import type { IsStringLiteral } from "type-fest";

type UncapitalizedString<T extends Readonly<string>> =
  IsStringLiteral<T> extends true ? Uncapitalize<T> : string;

/**
 * @description uncapitalize first letter of string
 *
 * @param input - input string to capitalize. type should be matched to T
 *
 * @example
 * uncapitalize('A') // returns 'a'
 *
 * @example
 * uncapitalize('Abc') // returns 'abc'
 *
 * @example
 * uncapitalize('') // returns ''
 */
export function uncapitalize<T extends Readonly<string>>(
  input: T,
): UncapitalizedString<T> {
  const [first, ...rest] = input;
  return [first?.toLowerCase(), ...rest].join("");
}
