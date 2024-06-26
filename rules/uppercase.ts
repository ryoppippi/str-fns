import type * as TF from "type-fest";

type UppercaseString<T extends Readonly<string>> = TF.IsStringLiteral<T> extends
  true ? Uppercase<T> : string;

/**
 * get uppercase string
 *
 * ```ts
 * import { uppercase } from '@ryoppippi/str-fns'
 * const _: 'A' = uppercase('a');
 * const __: 'ABC' = uppercase('abc');
 * const ___: '' = uppercase('');
 * ```
 *
 * @param input - input string to capitalize. type should be matched to T
 */
export function uppercase<T extends Readonly<string>>(
  input: T,
): UppercaseString<T> {
  return input.toUpperCase();
}
