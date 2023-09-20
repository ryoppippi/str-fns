import { uncapitalize } from "./uncapitalize.js";
import { expect, test } from "bun:test";

test("should uncapitalize one letter", () => {
	const before = "A" as const;
	const uncapitalized = uncapitalize(before);
	const expected = "a" as const satisfies typeof uncapitalized;
	expect(uncapitalized).toBe(expected);
});

test("should uncapitalize a word", () => {
	const before = "Hello" as const;
	const uncapitalized = uncapitalize(before);
	const expected = "hello" as const satisfies typeof uncapitalized;
	expect(uncapitalized).toBe(expected);
});

test("should uncapitalize a sentence", () => {
	const before = "Hello World" as const;
	const uncapitalized = uncapitalize(before);
	const expected = "hello World" as const satisfies typeof uncapitalized;
	expect(uncapitalized).toBe(expected);
});

test("should uncapitalize empty string", () => {
	const before = "" as const;
	const uncapitalized = uncapitalize(before);
	const expected = "" as const satisfies typeof uncapitalized;
	expect(uncapitalized).toBe(expected);
});
