import type { IsStringLiteral } from "type-fest";

type UncapitalizedString<T extends Readonly<string>> =
  IsStringLiteral<T> extends true ? Uncapitalize<T> : string;

/**
 *  uncapitalize first letter of string
 *
 * ```ts
 * import { uncapitalize } from '@ryoppippi/str-fns'
 * const _: 'a' = uncapitalize('A');
 * const __: 'abc' = uncapitalize('Abc');
 * const ___: '' = uncapitalize('');
 * ```
 *
 * @param input - input string to capitalize. type should be matched to T
 */
export function uncapitalize<T extends Readonly<string>>(
  input: T,
): UncapitalizedString<T> {
  const [first, ...rest] = input;
  return [first?.toLowerCase(), ...rest].join("");
}
