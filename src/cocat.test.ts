import { assertEquals } from "assert";
import type { AssertTrue, IsExact } from "type-testing";
import { concat } from "./concat.ts";

Deno.test("should concat one string", () => {
  const concated = concat("a");
  const expected = "a" as const;
  assertEquals(concated, expected);
  type _ = AssertTrue<IsExact<typeof expected, typeof concated>>;
});

Deno.test("should concat multiple strings", () => {
  const concated = concat("hello", "world");
  const expected = "helloworld" as const;
  assertEquals(concated, expected);
  type _ = AssertTrue<IsExact<typeof expected, typeof concated>>;
});

Deno.test("should concat multiple strings with a separator", () => {
  const concated = concat("hello", " ", "world");
  const expected = "hello world" as const;
  assertEquals(concated, expected);
  type _ = AssertTrue<IsExact<typeof expected, typeof concated>>;
});
