import { test, expect } from 'bun:test';
import { split } from './split.js';

test('should split a string into an array', () => {
	const before = 'abc' as const;
	const splitted = split(before, '');
	const expected = ['a', 'b', 'c'] as const satisfies Readonly<typeof splitted>;
	expect(splitted).toEqual(expected);
});

test('should split a string into an array', () => {
	const before = 'a-b-c' as const;
	const splitted = split(before, '-');
	const expected = ['a', 'b', 'c'] as const satisfies Readonly<typeof splitted>;
	expect(splitted).toEqual(expected);
});

test('should split a string into an array', () => {
	const before = 'a-b-c' as const;
	const splitted = split(before, '');
	const expected = ['a', '-', 'b', '-', 'c'] as const satisfies Readonly<typeof splitted>;
	expect(splitted).toEqual(expected);
});

test('should split a string into an array', () => {
	const before = 'a-b-c' as const;
	const splitted = split(before, '$');
	const expected = ['a-b-c'] as const satisfies Readonly<typeof splitted>;
	expect(splitted).toEqual(expected);
});
