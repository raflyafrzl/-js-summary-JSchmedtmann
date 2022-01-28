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

restaurant.orderPizza("mushrooms", "cheese", "asparagus");
restaurant.orderPizza("mushrooms");

//1)Destructuring

//Spread Operator
const arr = [1, 2, [3, 4, 5]];

console.log(arr);

//Rest pattern adalah kebalikan Spread operator yang mana rest pattern ini untuk membungkus elemen menjadi array
//REST pattern, karena berada pada sisi kiri  sama dengan(=);

const [a, b, ...others] = [1, 2, 3, 4, 5, 5, 6];

console.log(others);

const [pizza, , risotto, ...otherfoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto);

const [test, , rr, ...restFoods] = restaurant.starterMenu;

console.log(test, rr, restFoods);

//2)Functions
//Rest parameter = function yang memiliki argumen yang tak tentu kemudian dilakukan rest sehingga
//function hanya memiliki 1 parameter yang menampung keseluruhan argument dari function tersebut

const add = function (...numbers) {
  let temp = 0;
  for (let i = 0; i < numbers.length; i++) {
    temp += numbers[i];
  }

  console.log(temp);
};

add(1, 2, 2, 3);
add(4, 4, 4, 4, 4);
add(1424, 2, 2, 2);

const x = [23, 5, 7];

add(...x);
