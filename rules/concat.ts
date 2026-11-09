type ConcatingLoop<
  T extends readonly string[],
  R extends string = "",
> = T extends
  readonly [infer Head extends string, ...infer Rest extends string[]]
  ? ConcatingLoop<Rest, `${R}${Head}`>
  : T extends readonly [] ? R
  : `${R}${string}`;

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
 * const ____: `a${string}` = concat("a", random.toString());
 * ```
 *
 * @param ...inputs - strings to concat
 */
export function concat<T extends readonly string[]>(
  ...inputs: T
): ConcatedString<T> {
  return "".concat(...inputs) as ConcatedString<T>;
}
