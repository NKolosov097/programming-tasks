import chunk from 'lodash/chunk.js';

export const hexToRgb = (hex) => {
  const [r, g, b] = chunk(hex.slice(1), 2)
    .map((channel) => channel.join(''))
    .map((channel) => parseInt(channel, 16));
  return { r, g, b };
};

export const rgbToHex = (red, green, blue) => {  
  red = red.toString(16).padStart(2, '0');
  green = green.toString(16).padStart(2, '0');
  blue = blue.toString(16).padStart(2, '0');

  return `#${red}${green}${blue}`;
};
