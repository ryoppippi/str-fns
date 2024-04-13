import type { IsStringLiteral } from "type-fest";
import type { AssertTrue, IsExact } from "type-testing";

type UncapitalizedString<T extends Readonly<string>> =
  IsStringLiteral<T> extends true ? Uncapitalize<T> : string;

/**
 * @description uncapitalize first letter of string
 *
 * @param input - input string to capitalize. type should be matched to T
 *
 * @example
 * uncapitalize('A') // returns 'a'
 *
 * @example
 * uncapitalize('Abc') // returns 'abc'
 *
 * @example
 * uncapitalize('') // returns ''
 */
export function uncapitalize<T extends Readonly<string>>(
  input: T,
): UncapitalizedString<T> {
  const [first, ...rest] = input;
  return [first?.toLowerCase(), ...rest].join("");
}

if (globalThis.Deno) {
  const { assertEquals } = await import("assert");

  Deno.test("should uncapitalize one letter", () => {
    const before = "A" as const;
    const uncapitalized = uncapitalize(before);
    const expected = "a" as const;
    assertEquals(uncapitalized, expected);
    type _ = AssertTrue<IsExact<typeof expected, typeof uncapitalized>>;
  });

  Deno.test("should uncapitalize a word", () => {
    const before = "Hello" as const;
    const uncapitalized = uncapitalize(before);
    const expected = "hello" as const;
    assertEquals(uncapitalized, expected);
    type _ = AssertTrue<IsExact<typeof expected, typeof uncapitalized>>;
  });

  Deno.test("should uncapitalize a sentence", () => {
    const before = "Hello World" as const;
    const uncapitalized = uncapitalize(before);
    const expected = "hello World" as const;
    assertEquals(uncapitalized, expected);
    type _ = AssertTrue<IsExact<typeof expected, typeof uncapitalized>>;
  });

  Deno.test("should uncapitalize empty string", () => {
    const before = "" as const;
    const uncapitalized = uncapitalize(before);
    const expected = "" as const;
    assertEquals(uncapitalized, expected);
    type _ = AssertTrue<IsExact<typeof expected, typeof uncapitalized>>;
  });
}
