/*
Реализуйте и экспортируйте функции ipToInt() и intToIp(), которые преобразовывают представление IP-адреса из десятичного формата с точками в 32-битное число в десятичной форме и обратно.

Функция ipToInt() принимает на вход строку и должна возвращать число. А функция intToIp() наоборот: принимает на вход число, а возвращает строку.
*/

import chunk from 'lodash/chunk.js';

export const ipToInt = (str) => {
  const numbers = str
    .split('.')
    .map(item => Number(item).toString(16).padStart(2, 0))
    .join('');

  return parseInt(numbers, 16);
};

export const intToIp = (num) => {
  const result = num.toString(16).padStart(8, 0);

  return chunk(result, 2)
    .map((octet) => parseInt(octet.join(''), 16))
    .join('.');
};
