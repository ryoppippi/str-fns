import type { IsStringLiteral } from "type-fest";

type LowercaseString<T extends Readonly<string>> = IsStringLiteral<T> extends
  true ? Lowercase<T> : string;

/**
 * @description get lowercase string
 *
 * @param input - input string to capitalize. type should be matched to T
 *
 * @example
 * lowercase('A') // 'a'
 *
 * @example
 * lowercase('aBC') // 'abc'
 *
 * @example
 * lowercase('') // ''
 */
export function lowercase<T extends Readonly<string>>(
  input: T,
): LowercaseString<T> {
  return input.toLowerCase();
}
