import { toUpperCase } from './uppercase.js';
import { describe, it, expect } from 'vitest';
describe('uppercase test', () => {
	it('should one uppercase letter', () => {
		const before = 'a' as const;
		const uppercased = toUpperCase<typeof before>(before);
		const expected = 'A' satisfies typeof uppercased;
		expect(uppercased).toBe(expected);
	});
	it('should uppercase a word', () => {
		const before = 'hEllO' as const;
		const uppercased = toUpperCase<typeof before>(before);
		const expected = 'HELLO' satisfies typeof uppercased;
		expect(uppercased).toBe(expected);
	});
	it('should uppercase a sentence', () => {
		const before = 'hellO wOrld' as const;
		const uppercased = toUpperCase<typeof before>(before);
		const expected = 'HELLO WORLD' satisfies typeof uppercased;
		expect(uppercased).toBe(expected);
	});
	it('should empty string', () => {
		const before = '' as const;
		const uppercased = toUpperCase<typeof before>(before);
		const expected = '' satisfies typeof uppercased;
		expect(uppercased).toBe(expected);
	});
});
