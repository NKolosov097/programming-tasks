/*
Реализуйте и экспортируйте функцию, которая возвращает длину последнего слова переданной на вход строки. Словом считается любая последовательность, не содержащая пробелов.

getLastWordLength(''); // 0
 
getLastWordLength('man in BlacK'); // 5
 
getLastWordLength('hello, world!  '); // 6
*/

export const getLastWordLength = (str) => {
  const words = str.trim().split(' ');
  return words.at(-1).length;
};