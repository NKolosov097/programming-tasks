import { make } from '../rational.js';

test('rational', () => {
  const rat1 = make(3, 8);
  expect(rat1.getNumer()).toBe(3);
  expect(rat1.getDenom()).toBe(8);
  expect(rat1.toString()).toBe('3/8');

  const rat2 = make();
  rat2.setNumer(10);
  rat2.setDenom(3);
  const result = rat1.add(rat2);
  expect(result.getNumer()).toBe(89);
  expect(result.getDenom()).toBe(24);

  const rat3 = make(-4, 16);
  expect(rat3.toString()).toBe('-4/16');
  expect(rat3.getNumer()).toBe(-4);
  expect(rat3.getDenom()).toBe(16);

  const rat4 = make(12, 5);
  const result2 = rat3.add(rat4);
  expect(result2.getNumer()).toBe(172);
  expect(result2.getDenom()).toBe(80);
});