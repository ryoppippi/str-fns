import type { IsStringLiteral } from "type-fest";

import { assertEquals } from "assert";
import type { AssertTrue, IsExact } from "type-testing";

type CapitalizedString<T extends Readonly<string>> = IsStringLiteral<T> extends
  true ? Capitalize<T> : string;

/**
 * @description capitalize first letter of string
 *
 * @param input - input string to capitalize. type should be matched to T
 *
 * @example
 * capitalize('a') // returns 'A'
 *
 * @example
 * capitalize('abc') // returns 'Abc'
 *
 * @example
 * capitalize('') // returns ''
 */
export function capitalize<T extends Readonly<string>>(
  input: T,
): CapitalizedString<T> {
  const [first, ...rest] = input;
  return [first?.toUpperCase(), ...rest].join("");
}

Deno.test("should capitalize one lowercase letter", () => {
  const before = "a" as const;
  const capitalized = capitalize(before);
  const expected = "A" as const;
  assertEquals(capitalized, expected);
  type _ = AssertTrue<IsExact<typeof expected, typeof capitalized>>;
});

Deno.test("should capitalize one uppercase letter", () => {
  const before = "A" as const;
  const capitalized = capitalize(before);
  const expected = "A" as const;
  assertEquals(capitalized, expected);
  type _ = AssertTrue<IsExact<typeof expected, typeof capitalized>>;
});

Deno.test("should capitalize multiple letters", () => {
  const before = "abc" as const;
  const capitalized = capitalize(before);
  const expected = "Abc" as const;
  assertEquals(capitalized, expected);
  type _ = AssertTrue<IsExact<typeof expected, typeof capitalized>>;
});

Deno.test("should capitalize empty string", () => {
  const before = "" as const;
  const capitalized = capitalize(before);
  const expected = "" as const;
  assertEquals(capitalized, expected);
  type _ = AssertTrue<IsExact<typeof expected, typeof capitalized>>;
});
