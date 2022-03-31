//reduce merupakan sebuah method yang berguna untuk memperpendek sbuah array
//seperti melakukan penambahan kepada seluruh nilai array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce((accumulator, el, i, entireArray) => {
  // console.log(accumulator);
  return accumulator + el;
}, 0);
//0 pada reduce merupakan sebuah accumulator awalnya
// console.log(balance);

//maximum value with reduce

const maxValue = movements.reduce(function (acc, el) {
  acc = acc < el ? el : acc;

  return acc;
}, 0);

console.log(maxValue);

//cara kedua

const maxVal = movements.reduce(function (acc, el) {
  return acc > el ? acc : el;
}, movements[0]);

console.log(maxVal);
