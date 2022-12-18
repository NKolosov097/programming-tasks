import { rgbToHex, hexToRgb } from '../solution.js';

const colors = [
  ['#000000', { r: 0, g: 0, b: 0 }],
  ['#ffffff', { r: 255, g: 255, b: 255 }],
  ['#00840c', { r: 0, g: 132, b: 12 }],
  ['#24ab00', { r: 36, g: 171, b: 0 }],
  ['#543fab', { r: 84, g: 63, b: 171 }],
  ['#f700de', { r: 247, g: 0, b: 222 }],
  ['#c60123', { r: 198, g: 1, b: 35 }],
];

describe('convert hex to rgb', () => {
  test.each(colors)('testing #%#', (hex, rgb) => {
    expect(hexToRgb(hex)).toEqual(rgb);
  });
});

describe('convert rgb to hex', () => {
  test.each(colors)('testing #%#', (hex, { r, g, b }) => {
    expect(rgbToHex(r, g, b)).toEqual(hex);
  });
});
