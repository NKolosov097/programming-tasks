/*
Реализуйте тело функции smallestDivisor(), используя итеративный процесс. Функция должна находить наименьший делитель заданного числа. Число, передаваемое в функцию, больше нуля.

Доп. условие: делитель должен быть больше единицы, за исключением случая, когда аргументом является единица (наименьшим делителем которой является также единица).

Например, наименьший делитель числа 15 это 3.

smallestDivisor(15); // 3
smallestDivisor(17); // 17
*/

export const smallestDivisor = (num) => {
    if (num === 1) return 1;
  
    const func = (divisible, divisor) => {
      if (divisor > divisible / 2) return divisible;
      if (divisible % divisor === 0) return divisor;
  
      return func(divisible, divisor + 1);
    };
  
    return func(num, 2);
  };