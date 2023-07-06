import { uncapitalize } from './uncapitalize.js';
import { describe, it, expect } from 'vitest';
describe('uncapitalize test', () => {
	it('should uncapitalize one uppercase letter', () => {
		const before = 'A' as const;
		const capitalized = uncapitalize<typeof before>(before);
		const expected = 'a' satisfies typeof capitalized;
		expect(capitalized).toBe(expected);
	});
	it('should uncapitalize one lowercase letter', () => {
		const before = 'a' as const;
		const capitalized = uncapitalize<typeof before>(before);
		const expected = 'a' satisfies typeof capitalized;
		expect(capitalized).toBe(expected);
	});
	it('should uncapitalize multiple letters', () => {
		const before = 'Abc' as const;
		const capitalized = uncapitalize<typeof before>(before);
		const expected = 'abc' satisfies typeof capitalized;
		expect(capitalized).toBe(expected);
	});
	it('should uncapitalize empty string', () => {
		const before = '' as const;
		const capitalized = uncapitalize<typeof before>(before);
		const expected = '' satisfies typeof capitalized;
		expect(capitalized).toBe(expected);
	});
});
