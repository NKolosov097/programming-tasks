/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает список пользователей и возвращает объект, где ключ - это год рождения, а значение - это количество мужчин, родившихся в этот год.

const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
  { name: 'Jon', gender: 'male', birthday: '1980-11-03' },
  { name: 'Robb', gender: 'male', birthday: '1980-05-14' },
  { name: 'Tisha', gender: 'female', birthday: '2012-11-03' },
  { name: 'Rick', gender: 'male', birthday: '2012-11-03' },
  { name: 'Joffrey', gender: 'male', birthday: '1999-11-03' },
  { name: 'Edd', gender: 'male', birthday: '1973-11-03' },
];
 
getMenCountByYear(users);
// {
//   1973: 3,
//   1963: 1,
//   1980: 2,
//   2012: 1,
//   1999: 1,
// };
*/

const getMenCountByYear = (users) => {
  const result = {};

  users.map(({ gender, birthday }) => {
    if (!result.hasOwnProperty(birthday.slice(0, 4)) && gender === 'male') result[birthday.slice(0, 4)] = 1;
    else if (result.hasOwnProperty(birthday.slice(0, 4)) && gender === 'male') result[birthday.slice(0, 4)]++;
  });

  return result;
};

export default getMenCountByYear;