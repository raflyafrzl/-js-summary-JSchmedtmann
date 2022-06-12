const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const rafly = new Person("Rafly", 2001);
const afrizal = new Person("afrizal", 2002);

//Jadi pada dasarnya ketika kita membuat kode seperti dibawah ini
//masing masing object yang kita buat berdasarkan/dengan Constructor function(Person)
//memiliki akses kedalam prototype property(begitu juga dengan calcAge)
//tidak dipanggil berkali2

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

//oleh karena itu kita dapat melakukan ini
//karena object rafly dibuat berdasarkan Constructor Function(person)
rafly.calcAge();

//yang terjadi dibalik layar:
// 1. object kosong dibuat ({})
// 2. function dipanggil dan this keyword akan menjadi new object {};
// 3. terhubung ke prototype
// 4.  function melakukan return secara otomatis

//Person.prototype bukan lah property milik Class person itu sendiri
//melainkan prototype dari masing masing object yang terhubung ke Constructor function Person

console.log(Person.__proto__ === Object.__proto__);

//akan menghasilkan false, karena Person.prototype itu bukan prototype dari object rafly secara langsung
console.dir(Object.__proto__);

const Car = function () {};

const bmw = new Car();

console.log(Object.prototype === Car.prototype.__proto__);
