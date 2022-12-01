/*
Реализуйте и экспортируйте функцию, которая принимает на вход список емейлов, а возвращает количество емейлов, расположенных на каждом бесплатном домене. Список бесплатных доменов хранится в константе freeEmailDomains.

const emails = [
    'info@gmail.com',
    'info@yandex.ru',
    'info@hotmail.com',
    'mk@host.com',
    'support@hexlet.io',
    'key@yandex.ru',
    'sergey@gmail.com',
    'vovan@gmail.com',
    'vovan@hotmail.com',
];
 
getFreeDomainsCount(emails);
 {
   'gmail.com': 3,
   'yandex.ru': 2,
   'hotmail.com': 2,
 };
*/

export const getFreeDomainsCount = (emails) => {
  const domensOfEmails = emails.map(email => email.split('@')[1]);
  const filteredEmails = domensOfEmails.filter(item => freeEmailDomains.includes(item));
  const result = filteredEmails.reduce((acc, currentValue) => {
    if (!Object.hasOwn(acc, currentValue)) {
      acc[currentValue] = 0;
    };
    acc[currentValue]++;

    return acc;
  }, {});

  return result;
};