import { test } from "@cross/test";
import { assertEquals } from "@std/assert";
import type { IsExact } from "type-testing";
import { snakecase } from "./snakecase.ts";

test("should snakecase a word", () => {
  const before = "isHappy" as const;
  const snakecased = snakecase(before);
  const expected = "is_happy" as const;
  assertEquals(snakecased, expected);
  true satisfies IsExact<typeof expected, typeof snakecased>;
});

test("should snakecase empty string", () => {
  const before = "" as const;
  const snakecased = snakecase(before);
  const expected = "" as const;
  assertEquals(snakecased, expected);
  true satisfies IsExact<typeof expected, typeof snakecased>;
});

test("should snakecase a word with number", () => {
  const before = "isHappy1" as const;
  const snakecased = snakecase(before);
  const expected = "is_happy1" as const;
  assertEquals(snakecased, expected);
  true satisfies IsExact<typeof expected, typeof snakecased>;
});
