import type * as TF from "type-fest";

type SplitString<
  T extends Readonly<string>,
  U extends Readonly<string>,
> = TF.IsStringLiteral<T> extends true ? Readonly<TF.Split<T, U>>
  : Readonly<string[]>;

/**
 *  Split string by separator
 *
 * ```ts
 * import { split } from '@ryoppippi/str-fns'
 * const _: readonly ['A', 'c'] = split('Abc', 'b');
 * const __: readonly ['a', 'b', 'c'] = split('a-b-c', '-');
 * const ___: readonly ['a', '-', 'b', '-', 'c'] = split('a-b-c', '');
 * const ____: readonly ['a-b-c'] = split('a-b-c', '$');
 * ```
 *
 * @param input - string to split. type should be matched to T
 *
 * @param separator - separator to split string. type should be matched to U
 */
export function split<T extends Readonly<string>, U extends Readonly<string>>(
  input: T,
  separator: U,
): SplitString<T, U> {
  return input.split(separator);
}
