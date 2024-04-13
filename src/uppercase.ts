import type { IsStringLiteral } from "type-fest";

import { assertEquals } from "assert";
import type { AssertTrue, IsExact } from "type-testing";

type UppercaseString<T extends Readonly<string>> = IsStringLiteral<T> extends
  true ? Uppercase<T> : string;

/**
 * @description get uppercase string
 *
 * @param input - input string to capitalize. type should be matched to T
 *
 * @example
 * uppercase('a') // 'A'
 *
 * @example
 * uppercase('abc') // 'Abc'
 *
 * @example
 * uppercase('') // ''
 */
export function uppercase<T extends Readonly<string>>(
  input: T,
): UppercaseString<T> {
  return input.toUpperCase();
}

Deno.test("should uppercase one letter", () => {
  const before = "a" as const;
  const uppercased = uppercase(before);
  const expected = "A" as const;
  assertEquals(uppercased, expected);
  type _ = AssertTrue<IsExact<typeof expected, typeof uppercased>>;
});

Deno.test("should uppercase a word", () => {
  const before = "hello" as const;
  const uppercased = uppercase(before);
  const expected = "HELLO" as const;
  assertEquals(uppercased, expected);
  type _ = AssertTrue<IsExact<typeof expected, typeof uppercased>>;
});

Deno.test("should uppercase a sentence", () => {
  const before = "hello world" as const;
  const uppercased = uppercase(before);
  const expected = "HELLO WORLD" as const;
  assertEquals(uppercased, expected);
  type _ = AssertTrue<IsExact<typeof expected, typeof uppercased>>;
});

Deno.test("should uppercase empty string", () => {
  const before = "" as const;
  const uppercased = uppercase(before);
  const expected = "" as const;
  assertEquals(uppercased, expected);
  type _ = AssertTrue<IsExact<typeof expected, typeof uppercased>>;
});
