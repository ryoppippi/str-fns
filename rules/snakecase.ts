import type * as TF from "type-fest";

type SnakeCaseString<T extends Readonly<string>> = TF.IsStringLiteral<T> extends
  true ? TF.SnakeCase<T> : string;

/**
 * get snakecase string
 *
 * ```ts
 * import { snakecase } from '@ryoppippi/str-fns'
 * const __: 'is_happy' = snakecase('isHappy');
 * const ___: '' = snakecase('');
 * ```
 * @param input - input string to capitalize. type should be matched to T
 */
export function snakecase<T extends Readonly<string>>(
  input: T,
): SnakeCaseString<T> {
  return input.replace(/([A-Z])/g, "_$1").toLowerCase() as SnakeCaseString<T>;
}
