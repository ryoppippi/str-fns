import { capitalize } from "./capitalize.js";
import { expect, test } from "bun:test";

test("should capitalize one lowercase letter", () => {
	const before = "a" as const;
	const capitalized = capitalize(before);
	const expected = "A" as const satisfies typeof capitalized;
	expect(capitalized).toBe(expected);
});

test("should capitalize one uppercase letter", () => {
	const before = "A" as const;
	const capitalized = capitalize(before);
	const expected = "A" as const satisfies typeof capitalized;
	expect(capitalized).toBe(expected);
});

test("should capitalize multiple letters", () => {
	const before = "abc" as const;
	const capitalized = capitalize(before);
	const expected = "Abc" as const satisfies typeof capitalized;
	expect(capitalized).toBe(expected);
});

test("should capitalize empty string", () => {
	const before = "" as const;
	const capitalized = capitalize(before);
	const expected = "" as const satisfies typeof capitalized;
	expect(capitalized).toBe(expected);
});
