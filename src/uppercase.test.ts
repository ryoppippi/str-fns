import { uppercase } from './uppercase.js';
import { expect, test } from 'bun:test';

test('should uppercase one letter', () => {
	const before = 'a' as const;
	const uppercased = uppercase(before);
	const expected = 'A' as const satisfies typeof uppercased;
	expect(uppercased).toBe(expected);
});

test('should uppercase a word', () => {
	const before = 'hello' as const;
	const uppercased = uppercase(before);
	const expected = 'HELLO' as const satisfies typeof uppercased;
	expect(uppercased).toBe(expected);
});

test('should uppercase a sentence', () => {
	const before = 'hello world' as const;
	const uppercased = uppercase(before);
	const expected = 'HELLO WORLD' as const satisfies typeof uppercased;
	expect(uppercased).toBe(expected);
});

test('should uppercase empty string', () => {
	const before = '' as const;
	const uppercased = uppercase(before);
	const expected = '' as const satisfies typeof uppercased;
	expect(uppercased).toBe(expected);
});
