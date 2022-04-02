const data1 = [16, 6, 10, 5, 6, 1, 4];
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
  })
  .reduce((acc, el, i, arr) => acc + el / arr.length, 0);
console.log(calcAverageHumanAge);
