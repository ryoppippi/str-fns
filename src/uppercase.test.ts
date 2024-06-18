import { test } from "@cross/test";
import { assertEquals } from "@std/assert";
import type { IsExact } from "type-testing";
import { uppercase } from "./uppercase.ts";

test("should uppercase one letter", () => {
  const before = "a" as const;
  const uppercased = uppercase(before);
  const expected = "A" as const;
  assertEquals(uppercased, expected);
  true satisfies IsExact<typeof expected, typeof uppercased>;
});

test("should uppercase a word", () => {
  const before = "hello" as const;
  const uppercased = uppercase(before);
  const expected = "HELLO" as const;
  assertEquals(uppercased, expected);
  true satisfies IsExact<typeof expected, typeof uppercased>;
});

test("should uppercase a sentence", () => {
  const before = "hello world" as const;
  const uppercased = uppercase(before);
  const expected = "HELLO WORLD" as const;
  assertEquals(uppercased, expected);
  true satisfies IsExact<typeof expected, typeof uppercased>;
});

test("should uppercase empty string", () => {
  const before = "" as const;
  const uppercased = uppercase(before);
  const expected = "" as const;
  assertEquals(uppercased, expected);
  true satisfies IsExact<typeof expected, typeof uppercased>;
});
