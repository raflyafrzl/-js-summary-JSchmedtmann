const airline = "Garuda Indonesia";
const plane = "Boeing 737";

//mendapatkan karakter pada posisinya

console.log(airline[0]); //karakter pertama

//Method pertama: indexOf = mendapatkan posisi index yang dimiliki String
//lastIndexOf
console.log(airline.indexOf("G")); //0 karena G pada posisi pertama

//Method Slice() = sama seperti substring pada java
console.log(airline.slice(1, 3)); //karakter 1-3

//Negatif parameter menunjukan bahwa string dimula idari akhir
console.log(airline.slice(-1)); //a index terakhir
console.log(airline.slice(1, -1)); //Dimulai dari 1 hingga akhir -1

//Check apakah kursi berada ditengah

const checkMiddleSeat = function (seat) {
  console.log(
    `${
      seat.indexOf("B") != -1 || seat.indexOf("E") != -1
        ? "Yo're in the Middle"
        : "You're not in the middle "
    }`
  );
};

checkMiddleSeat("11E");
