export const reverseInt = (num) => {
  return (num.toString()[0] === '-')
    ? Number('-' + num.toString().split('').slice(1).reverse().join(''))
    : Number(num.toString().split('').reverse().join(''));
};