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

//Logical Operator itu bisa digunakan tipe data apapun. tidak hnya boolean dan juga return tipe data apapun

//Short Cirtucit pada OR
//Akan mengeksekusi operand yang bernilai true/truthy
console.log("OR OPERATOR");
//===========================
console.log(1 || 0); // 1
console.log(0 || 3); // 3
//dapat Diimplementasikan jadi Ternary Operator

const checkGuest = restaurant.numguest || "DON'T HAVE GUEST"; //seperti ternary operator
console.log(checkGuest);

//AND kebalikan dari OR
console.log("AND OPERATOR");
console.log(1 || 0); // 0
console.log(0 || 4); //0;
//dapat diimplementasikan jadi IF
