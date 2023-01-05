import { fib } from '../solution.js';

test('solution', () => {
  expect(fib(0)).toBe(0);
  expect(fib(1)).toBe(1);
  expect(fib(2)).toBe(1);
  expect(fib(3)).toBe(2);
  expect(fib(4)).toBe(3);
  expect(fib(5)).toBe(5);
  expect(fib(10)).toBe(55);
});