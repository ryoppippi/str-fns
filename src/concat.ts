import type * as TF from "type-fest";

type ConcatingLoop<
  T extends readonly string[],
  R extends string = "",
> = [] extends T ? R
  : TF.IsStringLiteral<R> extends true
    ? T extends [infer A, ...infer B]
      ? B extends readonly string[]
        ? A extends string ? ConcatingLoop<B, `${R}${A}`>
        : string
      : string
    : string
  : string;

type ConcatedString<T extends readonly string[]> = ConcatingLoop<T>;

/**
 * concat strings
 *
 * ```ts
 * import { concat } from '@ryoppippi/str-fns'
 * const _: 'a' = concat('a');
 * const __: 'helloworld' = concat('hello', 'world');
 * const ___: 'hello world' = concat('hello', ' ', 'world');
 * ```
 *
 * @param ...inputs - strings to concat
 */
export function concat<T extends readonly string[]>(
  ...inputs: T
): ConcatedString<T> {
  return "".concat(...inputs) as ConcatedString<T>;
}
