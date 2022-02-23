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
// console.log(garudaIndonesia.bookings);
const euroWings = {
  airline: "EuroWings",
  iataCode: "EW",
  bookings: [],
};

//Bind keyword mengembalikan new value berupa function
//dengan bind method kita bisa melakukan partial application
//yaitu membagi beberapa argument terlebih dahulu untuk dipanggil

const book = garudaIndonesia.book;
const bookEw = book.bind(euroWings);
const bookGaruda = book.bind(garudaIndonesia);
bookEw(23, "RaflyJos");

const pertambahan = (nilai, nilaib) => {
  return nilai + nilaib + nilai;
};

console.log(pertambahan(10, 20));
//bisa diubah dengan partial application
const pertambahanBerbasis2 = pertambahan.bind(null, 2);

console.log(pertambahanBerbasis2(10));

//sederhanakan dengan function mengembalikan function

const funLuar = (value) => {
  return (rate) => {
    return value + value + rate;
  };
};

const getFunLuar = funLuar(23);

console.log(getFunLuar(10));
