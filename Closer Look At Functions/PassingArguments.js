const flight = "GI123";
const rafly = {
  passName: "Rafly Afrizal",
  passport: 121254125125,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "GI4444";
  passenger.passName = `Mr ${passenger.passName}`;

  if (passenger.passport === 121254125125) {
    alert("Checkd In");
  } else {
    alert("Failed, your passport is incorrect");
  }
};

checkIn(flight, rafly);

//Dalam javascript tidak ada yang namanya pass by reference
//karena sebenarnya reference tersebut memiliki sebuah value yang bernilai alamat dari referensi nya
// yang dimana alamat tersebut merupakan sebuah value
//sama saja seperti sebuah value yang memiliki nilai address
//jadi kita melempar/pass reference(object contohnya) tapi yang dilempar itu
//merupakan sebuah value(alamatnya)
