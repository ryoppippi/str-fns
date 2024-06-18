import { test } from "@cross/test";
import { assertEquals } from "@std/assert";
import type { IsExact } from "type-testing";
import { lowercase } from "./lowercase.ts";

test("should lowercase a word", () => {
  const before = "hEllO" as const;
  const lowercased = lowercase(before);
  const expected = "hello" as const;
  assertEquals(lowercased, expected);
  true satisfies IsExact<typeof expected, typeof lowercased>;
});

test("should lowercase a sentence", () => {
  const before = "hellO wOrld" as const;
  const lowercased = lowercase(before);
  const expected = "hello world" as const;
  assertEquals(lowercased, expected);
  true satisfies IsExact<typeof expected, typeof lowercased>;
});

test("should lowercase empty string", () => {
  const before = "" as const;
  const lowercased = lowercase(before);
  const expected = "" as const;
  assertEquals(lowercased, expected);
  true satisfies IsExact<typeof expected, typeof lowercased>;
});
