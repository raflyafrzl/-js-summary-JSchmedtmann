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
booker();
