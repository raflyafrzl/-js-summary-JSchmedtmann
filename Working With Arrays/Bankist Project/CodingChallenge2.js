const data1 = [5, 2, 4, 1, 15, 8, 3];
const calcAverageHumanAge = data1
  .map(function (el) {
    if (el <= 2) {
      return 2 * el;
    } else {
      return 16 + el * 4;
    }
  })
  .filter(function (el) {
    return el > 18;
  });
console.log(calcAverageHumanAge);
const totalAverage = calcAverageHumanAge.reduce(function (acc, el) {
  return acc + el;
}, 0);
console.log(`${totalAverage / calcAverageHumanAge.length}`);
