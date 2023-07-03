// @ts-strict

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const add = (a, b) => {
	return a + b;
};

if (import.meta?.vitest != null) {
	const { describe, it, expect } = import.meta.vitest;
	describe('calc', () => {
		it('add', () => {
			expect(add(1, 2)).toBe(3);
		});
	});
}
