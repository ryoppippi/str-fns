import type { IsStringLiteral, Split } from "type-fest";

import { assertEquals } from "assert";
import type { AssertTrue, IsExact } from "type-testing";

type SplitString<
  T extends Readonly<string>,
  U extends Readonly<string>,
> = IsStringLiteral<T> extends true ? Readonly<Split<T, U>>
  : Readonly<string[]>;

/**
 * @description Split string by separator
 *
 * @param input - string to split. type should be matched to T
 *
 * @param separator - separator to split string. type should be matched to U
 *
 * @example
 * split('Abc', 'b') // returns ['A', 'c']
 *
 * @example
 * split('a-b-c', '-') // returns ['a', 'b', 'c']
 *
 * @example
 * split('a-b-c', '') // returns ['a', '-', 'b', '-', 'c']
 *
 * @example
 * split('a-b-c', '$') // returns ['a-b-c']
 */
export function split<T extends Readonly<string>, U extends Readonly<string>>(
  input: T,
  separator: U,
): SplitString<T, U> {
  return input.split(separator);
}

Deno.test("should split a string into an array", () => {
  const before = "abc" as const;
  const splitted = split(before, "");
  const expected = ["a", "b", "c"] as const;
  assertEquals(splitted, expected);
  type _ = AssertTrue<IsExact<typeof expected, typeof splitted>>;
});

Deno.test("should split a string into an array", () => {
  const before = "a-b-c" as const;
  const splitted = split(before, "-");
  const expected = ["a", "b", "c"] as const;
  assertEquals(splitted, expected);
  type _ = AssertTrue<IsExact<typeof expected, typeof splitted>>;
});

Deno.test("should split a string into an array", () => {
  const before = "a-b-c" as const;
  const splitted = split(before, "");
  const expected = ["a", "-", "b", "-", "c"] as const;
  assertEquals(splitted, expected);
  type _ = AssertTrue<IsExact<typeof expected, typeof splitted>>;
});

Deno.test("should split a string into an array", () => {
  const before = "a-b-c" as const;
  const splitted = split(before, "$");
  const expected = ["a-b-c"] as const;
  assertEquals(splitted, expected);
  type _ = AssertTrue<IsExact<typeof expected, typeof splitted>>;
});
