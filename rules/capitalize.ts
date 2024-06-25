import type * as TF from "type-fest";

type CapitalizedString<T extends Readonly<string>> =
  TF.IsStringLiteral<T> extends true ? Capitalize<T> : string;

/**
 * capitalize first letter of string
 *
 * ```ts
 * import { capitalize } from '@ryoppippi/str-fns'
 * const _: 'A' = capitalize('a');
 * const __: 'Abc' = capitalize('abc');
 * const ___: '' = capitalize('');
 * ```
 *
 * @param input - input string to capitalize. type should be matched to T
 */
export function capitalize<T extends Readonly<string>>(
  input: T,
): CapitalizedString<T> {
  const [first, ...rest] = input;
  return [first?.toUpperCase(), ...rest].join("");
}
