import { sameParity } from '../sameParityFilter.js';

test('SameParity', () => {
  const result = sameParity([5, 0, 1, -3, 10]);
  expect(result).toEqual([5, 1, -3]);

  const result2 = sameParity([2, 0, 1, -3, 10, -2]);
  expect(result2).toEqual([2, 0, 10, -2]);

  const result3 = sameParity([-1, 0, 1, -3, 10, -2]);
  expect(result3).toEqual([-1, 1, -3]);

  const result4 = sameParity([10, -1.5, 1.3, -3, 25, -2]);
  expect(result4).toEqual([10, -2]);

  const result5 = sameParity([]);
  expect(result5).toEqual([]);
});