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
};

// SpreadOperator = digunakan untuk mengambil nilai array. jika kita punya sebuah array baru
//kemudian array tersebut ingin digabungkan dengan "Nilai" (bukan arraynya) yang dimiliki oleh array
//asalnya

//Menggunakan ...(dot 3x)
//ex:

const arr = [1, 2, 3];

const newArr = [...arr, 4, 5, 6];

console.log(newArr); //hasilnya adalah [1,2,3,4,5,6]
console.log(...newArr); //hasilnya adalah 1 2 3 4 5 6

//Challenge

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log(menu);

//Mengcopy object

const copyRestaurant = {
  ...restaurant,
  founder: "Muhammad Rafly Afrizal Pratama",
  foundingIn: "1910",
};

console.log(copyRestaurant); //mengcopy restaurant object tanpa Object.assign();

//Passing Spread Operator menjadi argumen function
