const myName = "Rafly Afrizal Pratama";

//membuat semua string lower case
console.log(myName.toLowerCase());

//fix capitalization
const randomName = "jUnEt";
const randomNameFixed =
  randomName[0].toUpperCase() + randomName.slice(1).toLowerCase();
console.log(randomNameFixed);

//replacing

const harga = "123$$$$";

console.log(harga.replace("$", "Rupiah")); //mengganti $ menjadi Rupiah
console.log(harga.replaceAll("$", "Rupiah"));

console.log(harga.startsWith("123")); //true, karena variable harga dimulai dari angka 123
console.log(harga.endsWith("oo")); //false karena harga diakhir oleh rupiah.
