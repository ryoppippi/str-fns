import type * as TF from "type-fest";

type LowercaseString<T extends Readonly<string>> = TF.IsStringLiteral<T> extends
  true ? Lowercase<T> : string;

/**
 * get lowercase string
 *
 * ```ts
 * import { lowercase } from '@ryoppippi/str-fns'
 * const _: 'a' = lowercase('A');
 * const __: 'abc' = lowercase('aBC');
 * const ___: '' = lowercase('');
 * ```
 * @param input - input string to capitalize. type should be matched to T
 */
export function lowercase<T extends Readonly<string>>(
  input: T,
): LowercaseString<T> {
  return input.toLowerCase();
}
