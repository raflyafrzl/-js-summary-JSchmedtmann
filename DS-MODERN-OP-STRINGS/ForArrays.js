const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({
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
  orderPasta: function (ing, ing2, ing3) {
    console.log(`Here is your pasta with ${ing}, ${ing2}, and ${ing3}`);
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    if (otherIngredients.length >= 1) console.log(otherIngredients);
  },
};

//For-Of
//digunakan untuk melakukan looping pada arrays

const arr = ["Rafly", "Dudung", "Maman", "Aceng", "Acung"];

console.log([4, 2, 3, 1]);

//tanpa mendapatkan indexnya
for (const el of arr) {
  console.log(el);
}

//for of dengan mendapatkan indeksnya. Menggunakan method entries()
// entries berisikan [index,element] dari array
for (const el of arr.entries()) console.log(el);

//dapat disederhanakan menggunakan destructuring

for (const [indx, el] of arr.entries())
  console.log(`Array ke- ${indx + 1} adalah ${el}`);
