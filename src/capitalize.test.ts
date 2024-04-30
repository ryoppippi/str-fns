import { assertEquals } from "assert";
import type { AssertTrue, IsExact } from "type-testing";
import { capitalize } from "./capitalize.ts";

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
