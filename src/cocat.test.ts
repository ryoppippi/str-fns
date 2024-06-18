import { test } from "@cross/test";
import { assertEquals } from "@std/assert";
import type { IsExact } from "type-testing";
import { concat } from "./concat.ts";

test("should concat one string", () => {
  const concated = concat("a");
  const expected = "a" as const satisfies "a";
  assertEquals(concated, expected);
  true satisfies IsExact<typeof expected, typeof concated>;
});

test("should concat multiple strings", () => {
  const concated = concat("hello", "world");
  const expected = "helloworld" as const satisfies "helloworld";
  assertEquals(concated, expected);
  true satisfies IsExact<typeof expected, typeof concated>;
});

test("should concat multiple strings with a separator", () => {
  const concated = concat("hello", " ", "world");
  const expected = "hello world" as const satisfies "hello world";
  assertEquals(concated, expected);
  true satisfies IsExact<typeof expected, typeof concated>;
});

test("should concat a string and a non-literal string and generate literal type", () => {
  const random = Math.random();
  const concated = concat("a", random.toString());
  const expected = `a${random.toString()}` as const satisfies `a${string}`;
  assertEquals(concated, expected);
  true satisfies IsExact<typeof expected, typeof concated>;
});

test("should concat a string and a non-literal string and generate literal type", () => {
  const randoms = [
    Math.random().toString(),
    Math.random().toString(),
  ] as const;
  const concated = concat("ab", ...randoms, "c");
  const expected = `ab${randoms.join("")}c` as const satisfies `ab${string}c`;
  assertEquals(concated, expected);
  true satisfies IsExact<typeof expected, typeof concated>;
});
