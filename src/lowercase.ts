import type { IsStringLiteral } from "type-fest";

import { assertEquals } from "assert"
import type { AssertTrue, IsExact } from "type-testing";

type LowercaseString<T extends Readonly<string>> =
	IsStringLiteral<T> extends true ? Lowercase<T> : string;

/**
 * @description get lowercase string
 *
 * @param input - input string to capitalize. type should be matched to T
 *
 * @example
 * lowercase('A') // 'a'
 *
 * @example
 * lowercase('aBC') // 'abc'
 *
 * @example
 * lowercase('') // ''
 *
 */
export function lowercase<T extends Readonly<string>>(
	input: T,
): LowercaseString<T> {
	return input.toLowerCase();
}

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