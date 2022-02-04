const days = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"];

const openingHours = {
  [days[2]]: {
    open: 12,
    close: 22,
  },
  [days[2 + 3]]: {
    open: 11,
    close: 23,
  },
  [`${days[1]}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //Enhanced Object Literal dengan ES6
  openingHours,
  //Enchanced Object Literal dengan ES6. Function tidak perlu ditulis lagi. Cukup property nya saja
  orderDelivery({
    address = null,
    time,
    starterIndex,
    mainIndex,
    namaPelanggan = null,
  }) {
    if (address === null || namaPelanggan === null) {
      alert("Anda tidak memasukan alamat/Nama");
    } else {
      console.log(
        `Halo ${namaPelanggan}, anda memesan ${this.starterMenu[starterIndex]} dan ${this.mainMenu[mainIndex]}  pada jam ${time} dengan alamat ${address}`
      );
    }
  },
  orderPasta(ing, ing2, ing3) {
    console.log(`Here is your pasta with ${ing}, ${ing2}, and ${ing3}`);
  },

  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    if (otherIngredients.length >= 1) console.log(otherIngredients);
  },
};
console.log("Hello");

//Akan terjadi error karena property dari  openingHours tidak ada
//namanya sun lalu ingin mengakses juga property dari sun yaitu open
// console.log(restaurant.openingHours?.sun?.open);

//mengatasinya dengan Optional Chaining
//Maka akan mengecheck terlebih dahulu apakah....
//restaurant.openingHours.sun itu ada? jika tidak maka kembalikan undefined
console.log(restaurant.openingHours.sun?.open);

//Optional Chaining dapat dilakukan tidak hanya 1x, bisa berkali kali

const hari = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"];

//dapat disederhanakan dengan Nullish Coalescing
for (const day of hari) {
  const openTime = restaurant.openingHours[day]?.open;
  if (openTime) console.log(`Pada Hari ${day} kita buka dari jam ${openTime}`);
  else console.log(`Kami tutup pada hari ${day}`);
}

//Optional Chaining pada Methods dari object
//ex
console.log(restaurant.order?.(0, 1) ?? "Method tidak tersedia");

//Optional Chaining pada arrays
const user = [{ name: "rafly", age: 20 }];

console.log(user[3]?.name ?? "User tidak ditemukan");
