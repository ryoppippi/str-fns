import { test } from "@cross/test";
import { assertEquals } from "@std/assert";
import type { IsExact } from "type-testing";
import { capitalize } from "./capitalize.ts";

test("should capitalize one lowercase letter", () => {
  const before = "a" as const;
  const capitalized = capitalize(before);
  const expected = "A" as const;
  assertEquals(capitalized, expected);
  true satisfies IsExact<typeof expected, typeof capitalized>;
});

test("should capitalize one uppercase letter", () => {
  const before = "A" as const;
  const capitalized = capitalize(before);
  const expected = "A" as const;
  assertEquals(capitalized, expected);
  true satisfies IsExact<typeof expected, typeof capitalized>;
});

test("should capitalize multiple letters", () => {
  const before = "abc" as const;
  const capitalized = capitalize(before);
  const expected = "Abc" as const;
  assertEquals(capitalized, expected);
  true satisfies IsExact<typeof expected, typeof capitalized>;
});

test("should capitalize empty string", () => {
  const before = "" as const;
  const capitalized = capitalize(before);
  const expected = "" as const;
  assertEquals(capitalized, expected);
  true satisfies IsExact<typeof expected, typeof capitalized>;
});
