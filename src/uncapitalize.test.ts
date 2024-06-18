import { assertEquals } from "assert";
import type { IsExact } from "type-testing";
import { uncapitalize } from "./uncapitalize.ts";

Deno.test("should uncapitalize one letter", () => {
  const before = "A" as const;
  const uncapitalized = uncapitalize(before);
  const expected = "a" as const;
  assertEquals(uncapitalized, expected);
  true satisfies IsExact<typeof expected, typeof uncapitalized>;
});

Deno.test("should uncapitalize a word", () => {
  const before = "Hello" as const;
  const uncapitalized = uncapitalize(before);
  const expected = "hello" as const;
  assertEquals(uncapitalized, expected);
  true satisfies IsExact<typeof expected, typeof uncapitalized>;
});

Deno.test("should uncapitalize a sentence", () => {
  const before = "Hello World" as const;
  const uncapitalized = uncapitalize(before);
  const expected = "hello World" as const;
  assertEquals(uncapitalized, expected);
  true satisfies IsExact<typeof expected, typeof uncapitalized>;
});

Deno.test("should uncapitalize empty string", () => {
  const before = "" as const;
  const uncapitalized = uncapitalize(before);
  const expected = "" as const;
  assertEquals(uncapitalized, expected);
  true satisfies IsExact<typeof expected, typeof uncapitalized>;
});
