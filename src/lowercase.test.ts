import { lowercase } from '.';
import { describe, it, expect } from 'vitest';
describe('lowercase test', () => {
	it('should lowercase one letter', () => {
		const before = 'A' as const;
		const lowercased = lowercase(before);
		const expected = 'a' satisfies typeof lowercased;
		expect(lowercased).toBe(expected);
	});
	it('should lowercase a word', () => {
		const before = 'hEllO' as const;
		const lowercased = lowercase(before);
		const expected = 'hello' satisfies typeof lowercased;
		expect(lowercased).toBe(expected);
	});
	it('should lowercase a sentence', () => {
		const before = 'hellO wOrld' as const;
		const lowercased = lowercase(before);
		const expected = 'hello world' satisfies typeof lowercased;
		expect(lowercased).toBe(expected);
	});
	it('should lowercase empty string', () => {
		const before = '' as const;
		const lowercased = lowercase(before);
		const expected = '' satisfies typeof lowercased;
		expect(lowercased).toBe(expected);
	});
});
