/*
Реализуйте и экспортируйте функцию, которая переворачивает цифры в переданном числе и возвращает новое число.
*/

export const reverseInt = (num) => {
  return (num.toString()[0] === '-')
    ? Number('-' + num.toString().split('').slice(1).reverse().join(''))
    : Number(num.toString().split('').reverse().join(''));
};
