import type * as TF from "type-fest";

type ConcatingLoop<
  T extends readonly string[],
  R extends string = "",
> = [] extends T ? R
  : ConcatingLoop<TF.ArraySlice<T, 0, -1>, `${TF.LastArrayElement<T>}${R}`>;

type ConcatedString<T extends readonly string[]> = ConcatingLoop<T>;

/**
 * concat strings
 *
 * ```ts
 * import { concat } from '@ryoppippi/str-fns'
 * const _: 'a' = concat('a');
 * const __: 'helloworld' = concat('hello', 'world');
 * const ___: 'hello world' = concat('hello', ' ', 'world');
 *
 * const random = Math.random();
 * const _: `a${string}` = concat("a", random.tostring());
 * ```
 *
 * @param ...inputs - strings to concat
 */
export function concat<T extends readonly string[]>(
  ...inputs: T
): ConcatedString<T> {
  return "".concat(...inputs) as ConcatedString<T>;
}
