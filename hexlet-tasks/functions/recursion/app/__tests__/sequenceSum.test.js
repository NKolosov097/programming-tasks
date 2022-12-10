import { sequenceSum } from '../sequenceSum';

test('solution', () => {
  expect(sequenceSum(0, 0)).toBe(0);
  expect(sequenceSum(1, 1)).toBe(1);
  expect(sequenceSum(1, 5)).toBe(15);
  expect(sequenceSum(2, 6)).toBe(20);
  expect(sequenceSum(-1, -1)).toBe(-1);
  expect(sequenceSum(-5, 4)).toBe(-5);
  expect(Number.isNaN(sequenceSum(2, 1))).toBe(true);
  expect(Number.isNaN(sequenceSum(1, -5))).toBe(true);
});