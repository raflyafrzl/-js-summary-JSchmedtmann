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

//Mendapatkan Property name/Key dari sebuah object
//yang kemudian dilakukan loop untuk mendapatkan key nya
const totalDay = Object.keys(openingHours).length;

console.log(`Restaurant open on ${totalDay} days`);

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

//Property Values

const values = Object.values(openingHours);

console.log(values);

//Object memiliki Method yaitu  entries()

const element = Object.entries(openingHours);

console.log(element);

//Dapat diloop menggunakan For Of
//Disederhanakan dengan Destructuring
for (const [key, { open, close }] of element) {
  console.log(
    `Restaurant buka pada hari ${key}. Kami buka dari jam ${open} hingga ${close}`
  );
}
