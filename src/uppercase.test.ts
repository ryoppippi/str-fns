import { uppercase } from './uppercase.js';
import { describe, it, expect } from 'vitest';
describe('uppercase test', () => {
	it('should uppercase one letter', () => {
		const before = 'a' as const;
		const uppercased = uppercase<typeof before>(before);
		const expected = 'A' satisfies typeof uppercased;
		expect(uppercased).toBe(expected);
	});
	it('should uppercase a word', () => {
		const before = 'hello' as const;
		const uppercased = uppercase<typeof before>(before);
		const expected = 'HELLO' satisfies typeof uppercased;
		expect(uppercased).toBe(expected);
	});
	it('should uppercase a sentence', () => {
		const before = 'hello world' as const;
		const uppercased = uppercase<typeof before>(before);
		const expected = 'HELLO WORLD' satisfies typeof uppercased;
		expect(uppercased).toBe(expected);
	});
	it('should uppercase empty string', () => {
		const before = '' as const;
		const uppercased = uppercase<typeof before>(before);
		const expected = '' satisfies typeof uppercased;
		expect(uppercased).toBe(expected);
	});
});
