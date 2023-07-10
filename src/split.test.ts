import { split } from '.';
import { describe, it, expect } from 'vitest';
describe('split', () => {
	it('should split a string into an array', () => {
		const before = 'abc' as const;
		const splitted = split(before, '');
		const expected = ['a', 'b', 'c'] satisfies typeof splitted;
		expect(splitted).toEqual(expected);
	});
	it('should split a string into an array', () => {
		const before = 'a-b-c' as const;
		const splitted = split(before, '-');
		const expected = ['a', 'b', 'c'] satisfies typeof splitted;
		expect(splitted).toEqual(expected);
	});
	it('should split a string into an array', () => {
		const before = 'a-b-c' as const;
		const splitted = split(before, '');
		const expected = ['a', '-', 'b', '-', 'c'] satisfies typeof splitted;
		expect(splitted).toEqual(expected);
	});
	it('should not split a string into an array with wrong separator', () => {
		const before = 'a-b-c' as const;
		const splitted = split(before, '$');
		const expected = ['a-b-c'] satisfies typeof splitted;
		expect(splitted).toEqual(expected);
	});
});
