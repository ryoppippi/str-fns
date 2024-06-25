import { test } from "@cross/test";
import { assertEquals } from "@std/assert";
import type { IsExact } from "type-testing";
import { split } from "./split.ts";

test("should split a string into an array", () => {
  const before = "abc" as const;
  const splitted = split(before, "");
  const expected = ["a", "b", "c"] as const;
  assertEquals(splitted, expected);
  true satisfies IsExact<typeof expected, typeof splitted>;
});

test("should split a string into an array", () => {
  const before = "a-b-c" as const;
  const splitted = split(before, "-");
  const expected = ["a", "b", "c"] as const;
  assertEquals(splitted, expected);
  true satisfies IsExact<typeof expected, typeof splitted>;
});

test("should split a string into an array", () => {
  const before = "a-b-c" as const;
  const splitted = split(before, "");
  const expected = ["a", "-", "b", "-", "c"] as const;
  assertEquals(splitted, expected);
  true satisfies IsExact<typeof expected, typeof splitted>;
});

test("should split a string into an array", () => {
  const before = "a-b-c" as const;
  const splitted = split(before, "$");
  const expected = ["a-b-c"] as const;
  assertEquals(splitted, expected);
  true satisfies IsExact<typeof expected, typeof splitted>;
});
