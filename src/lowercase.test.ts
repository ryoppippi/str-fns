import { assertEquals } from "assert";
import type { AssertTrue, IsExact } from "type-testing";
import { lowercase } from "./lowercase.ts";

Deno.test("should lowercase a word", () => {
  const before = "hEllO" as const;
  const lowercased = lowercase(before);
  const expected = "hello" as const;
  assertEquals(lowercased, expected);
  type _ = AssertTrue<IsExact<typeof expected, typeof lowercased>>;
});

Deno.test("should lowercase a sentence", () => {
  const before = "hellO wOrld" as const;
  const lowercased = lowercase(before);
  const expected = "hello world" as const;
  assertEquals(lowercased, expected);
  type _ = AssertTrue<IsExact<typeof expected, typeof lowercased>>;
});

Deno.test("should lowercase empty string", () => {
  const before = "" as const;
  const lowercased = lowercase(before);
  const expected = "" as const;
  assertEquals(lowercased, expected);
  type _ = AssertTrue<IsExact<typeof expected, typeof lowercased>>;
});
