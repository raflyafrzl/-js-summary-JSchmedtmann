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
};
//Mempassing object sebagai argumen yang akan dilemparkan ke Method restaurant
restaurant.orderDelivery({
  namaPelanggan: "Rafly Afrizal",
  time: "19:00",
  starterIndex: 3,
  mainIndex: 2,
  address: "Jl. Ngaco bin Jago",
});

//Berbeda dengan array, dalam objek urutan elemen tidak penting
const { name, openingHours, categories } = restaurant;

console.log(name, openingHours, categories);

//Mengubah nama variable agar tidak sesuai dengan nama Property object

const {
  name: namaRestoran,
  openingHours: jadwalBuka,
  categories: tags,
} = restaurant;
console.log(namaRestoran, jadwalBuka, tags);

//Membuat Default values untuk Object
//Menu tidak ada dalam property object restaurant
const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);

//Mutating Variables
let a = 100;
let b = 12;

const objNumber = { a: 1, b: 2, c: 3 };
({ a, b } = objNumber);
console.log(a, b);

//Nested Object
const {
  fri: { open: buka, close: tutup },
} = restaurant.openingHours;

console.log(buka, tutup);

const ingredients = [prompt("1"), prompt("2"), prompt("3")];

restaurant.orderPasta(...ingredients);
