const garudaIndonesia = {
  airline: "Garuda",
  iataCode: "GI",
  bookings: [],
  book(flightNum, passName) {
    console.log(
      `${passName} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );

    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, passName });
  },
};

garudaIndonesia.book(239, "Rafly afrizal pratama");
garudaIndonesia.book(239, "Jonas");
// console.log(garudaIndonesia.bookings);
const euroWings = {
  airline: "EuroWings",
  iataCode: "EW",
  bookings: [],
};

//mengcopy function ke variable
//karena function itu adalah sebuah value

const book = garudaIndonesia.book;

// Terjadi Error karena variable book tidak menginherit "this"
//book(23, "RR");

book.call(euroWings, 333, "Rafly");

console.log(euroWings);

//menggunakan apply method
//argument harus berupa array
const dataFlight = [1233, "Ujang"];

//dapat disederhanakan kan menggunakan spread operator jika array
//apply sudah tidak dibutuhkan lagi pada es6++
book.apply(euroWings, dataFlight);
