/*
Реализуйте и экспортируйте по умолчанию функцию, которая создает рациональное число. Рациональное число должно быть представлено объектом со следующими методами:

Сеттер setNumer() - устанавливает числитель
Сеттер setDenom() - устанавливает знаменатель
Геттер getNumer() - возвращает числитель
Геттер getDenom() - возвращает знаменатель
Геттер toString() - возвращает строковое представление числа
Метод add() - складывает дробь на которой он был вызван с переданной дробью и возвращает новое рациональное число (не изменяет текущее!)
import make from './rational.js';
 
const rat1 = make();
rat1.setNumer(3);
rat1.setDenom(8);
rat1.getNumer(); // 3
rat1.getDenom(); // 8
 
const rat2 = make(10, 3);
 
// Формула сложения: a / b + c / d = (a * d + b * c) / (b * d)
const rat3 = rat1.add(rat2);
rat3.toString(); // '89/24'
*/

export const make = (numerator, denominator) => ({
    numerator,
    denominator,
    setNumer(newNumerator) {
      this.numerator = newNumerator;
    },
    setDenom(newDenom) {
      this.denominator = newDenom;
    },
    getNumer() {
      return this.numerator;
    },
    getDenom() {
      return this.denominator;
    },
    toString() {
      return `${numerator}/${denominator}`;
    },
    add(rational) {
      const newNumer = this.getNumer() * rational.getDenom() + rational.getNumer() * this.getDenom();
      const newDenom = this.getDenom() * rational.getDenom();
      return make(newNumer, newDenom);
    },
  });
