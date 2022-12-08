/*
DESCRIPTION:
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
explode("312")
should return :

"333122"
explode("102269")
should return :

"12222666666999999999"
*/

function explode(s) {
    let len = s.length;
    s = s.split('');
    let result = '';
    
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < Number(s[i]); j++) {
        result += `${s[i].toString()}`
      }  
    }
    
    return result;
  }

// function explode(s) {
//  return s.split("").map((e) => e.repeat(+e)).join("");
//}