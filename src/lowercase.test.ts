import { test, expect } from 'bun:test';
import { lowercase } from './lowercase.js';

test('should lowercase one letter', () => {
	const before = 'A' as const;
	const lowercased = lowercase(before);
	const expected = 'a' as const satisfies typeof lowercased;
	expect(lowercased).toBe(expected);
});

test('should lowercase a word', () => {
	const before = 'hEllO' as const;
	const lowercased = lowercase(before);
	const expected = 'hello' as const satisfies typeof lowercased;
	expect(lowercased).toBe(expected);
});

test('should lowercase a sentence', () => {
	const before = 'hellO wOrld' as const;
	const lowercased = lowercase(before);
	const expected = 'hello world' as const satisfies typeof lowercased;
	expect(lowercased).toBe(expected);
});

test('should lowercase empty string', () => {
	const before = '' as const;
	const lowercased = lowercase(before);
	const expected = '' as const satisfies typeof lowercased;
	expect(lowercased).toBe(expected);
});
