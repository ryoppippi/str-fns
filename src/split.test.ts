import { assertEquals } from "assert";
import type { IsExact } from "type-testing";
import { split } from "./split.ts";

Deno.test("should split a string into an array", () => {
  const before = "abc" as const;
  const splitted = split(before, "");
  const expected = ["a", "b", "c"] as const;
  assertEquals(splitted, expected);
  true satisfies IsExact<typeof expected, typeof splitted>;
});

Deno.test("should split a string into an array", () => {
  const before = "a-b-c" as const;
  const splitted = split(before, "-");
  const expected = ["a", "b", "c"] as const;
  assertEquals(splitted, expected);
  true satisfies IsExact<typeof expected, typeof splitted>;
});

Deno.test("should split a string into an array", () => {
  const before = "a-b-c" as const;
  const splitted = split(before, "");
  const expected = ["a", "-", "b", "-", "c"] as const;
  assertEquals(splitted, expected);
  true satisfies IsExact<typeof expected, typeof splitted>;
});

Deno.test("should split a string into an array", () => {
  const before = "a-b-c" as const;
  const splitted = split(before, "$");
  const expected = ["a-b-c"] as const;
  assertEquals(splitted, expected);
  true satisfies IsExact<typeof expected, typeof splitted>;
});
