const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

console.log(oneWord("Muhammad Rafly Afrizal Pratama"));

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");

  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn) {
  console.log("String beruba menjadi: " + fn(str));
  console.log("Function Property(name) " + fn.name);
};

transformer("javascript is the best", upperFirstWord);
transformer("javascript is the best", oneWord);

const operation = function (number1, number, fn) {
  console.log("Hasilnya adalah: " + fn(number1, number));
  console.log("Dengan bilangan " + number1 + " dan " + number);
};

const add = function (number, number1) {
  console.log("Pertambahan dari " + number + " dan " + number1);

  return number + number1;
};

const multiply = function (number, number1) {
  console.log("perkalian dari " + number + " dan " + number1);

  return number * number1;
};

const divide = function (number, number1) {
  console.log("pembagian dari " + number + " dan " + number1);

  return number / number1;
};
//Operation function bekerja sebagai High Order function dan add,multiply serta divide adalah
//Callback function. disaat menulis callback function cukup seperti nama variable
//tanpa menuliskan(), karena operasi akan dijalan dalam function High Order
operation(10, 5, add);
operation(10, 5, multiply);
operation(10, 5, divide);
