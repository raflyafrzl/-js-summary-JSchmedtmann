//Array.from({object.length:value} , mapMethod)

/* 
 Array from merupakan method dari ArrayConstructor yang digunakan untuk mengisi nilai array. 
 Menerima 2 parameter: 1. panjang array sebagai object/bisa menerima sebuah NodeList
                       2. Isi dari array dengan menggunakan callback method seperti MAP
*/

const randomDiceRolls = Array.from({ length: 10 }, (acc, i) =>
  Math.trunc(Math.random() * (6 - 1 + 1) + 1)
);

console.log(randomDiceRolls);
