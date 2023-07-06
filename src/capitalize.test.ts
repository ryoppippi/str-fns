import { capitalize } from './capitalize.js';
import { describe, it, expect } from 'vitest';
describe('capitalize test', () => {
	it('should capitalize one lowercase letter', () => {
		const before = 'a' as const;
		const capitalized = capitalize<typeof before>(before);
		const expected = 'A' satisfies typeof capitalized;
		expect(capitalized).toBe(expected);
	});
	it('should capitalize one uppercase letter', () => {
		const before = 'A' as const;
		const capitalized = capitalize<typeof before>(before);
		const expected = 'A' satisfies typeof capitalized;
		expect(capitalized).toBe(expected);
	});
	it('should capitalize multiple letters', () => {
		const before = 'abc' as const;
		const capitalized = capitalize<typeof before>(before);
		const expected = 'Abc' satisfies typeof capitalized;
		expect(capitalized).toBe(expected);
	});
	it('should capitalize empty string', () => {
		const before = '' as const;
		const capitalized = capitalize<typeof before>(before);
		const expected = '' satisfies typeof capitalized;
		expect(capitalized).toBe(expected);
	});
});
