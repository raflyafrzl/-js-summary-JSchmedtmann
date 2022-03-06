//closure membuat sebuah function mengingat variable yang pernah ada pada function awalnya/atasnya
//Closure mengingat variable dari parent function. jadi meskipun parent function telah
//me return sebuah function, function return tersebut akan tetap dapat mengakses VE milik
//parent function.

const secureBooking = function () {
  let test = 0;

  return function () {
    test++;
    console.log(test);
  };
};
//Sampai sini secureBooking() function harusnya sudah berakhir/keluar dari call stack
const booker = secureBooking();

//namun saat pemanggilan disini, variable test masih bisa digunakan
console.dir(secureBooking());
