/*
Реализуйте функцию fib() и экспортируйте её по умолчанию. Функция вычисляет положительные числа Фибоначчи. Аргументом является порядковый номер числа, нумерация чисел в последовательности начинается с нуля.
*/

export const fib= (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let [prev, curr] = [0, 1];
  let result = prev + curr;
  for (let i = 1; i < n; i++) {
    result = prev + curr;
    [prev, curr] = [curr, prev + curr];
  }

  return result;
};
