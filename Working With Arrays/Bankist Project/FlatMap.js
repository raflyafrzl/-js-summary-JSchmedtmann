//flat and flatmap = >
/*
flat method dimunculkan pada ES2019, berguna untuk melakukan flatting atau jika
kita memiliki array nested, maka nested itu akan diubah menjadi satu kesatuan array 
*/
const nestedArray = [[1, 2, 3], [4, 5, 6], 7, 8];

//flat method hanya bisa 1 level nested array, jadi jika terdapat deep nested, maka tidak bisa
//memisahkan semuanya menjadi 1 kesatuan array

console.log(nestedArray.flat());

//flat() dapat menerima parameter berupa angka u ntuk ingin memisahkan deep seberapa banyak

const nestedArray2 = [[[1, 2], 3], [4, 5, 6], 7, 8];

console.log(nestedArray2);
