//Map

//Struktur Data seperti Sets, hanya saja dia memiliki pasangan key value pair serta key nya boleh selain String

const rest = new Map();

//Memasukan Nilai ke Map
rest.set("Nama", "Muhammad Rafly Afrizal Pratama");

rest.set(true, "Dia Laki Laki");
rest.set(123, "Bilangan ");

//Mengupdate nilai Map berdasarkan Key nya
rest.set(123, "Angka ");
console.log(rest.has(true));
console.log(rest.get(123));

const map = new Map();
//urutan dalam Map juga seperti Set, yaitu irrelevant
map.set(1, "Angka Pertama");
map.set(3, "Angka Ketiga");
map.set(2, "Angka kedua");

console.log(map);
