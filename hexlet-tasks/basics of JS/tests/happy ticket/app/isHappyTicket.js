/*
Реализуйте и экспортируйте функцию, проверяющую является ли номер счастливым (номер — всегда строка). Функция должна возвращать true, если билет счастливый, или false, если нет.
*/

export const isHappyTicket = (num) => {
  const fHalf = num.slice(0, num.length / 2).split('');
  const sHalf = num.slice(num.length / 2).split('');

  const sumOf__fHalf = fHalf.reduce((acc, curr) => acc + Number(curr), 0);
  const sumOf__sHalf = sHalf.reduce((acc, curr) => acc + Number(curr), 0);

  return sumOf__fHalf === sumOf__sHalf;
};