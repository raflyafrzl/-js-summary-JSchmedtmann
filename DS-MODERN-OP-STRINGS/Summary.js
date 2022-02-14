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
  orderPasta: function (ing, ing2, ing3) {
    console.log(`Here is your pasta with ${ing}, ${ing2}, and ${ing3}`);
  },
};

const recipe = ["saus tar tar", "keju", "nanas"];
restaurant.orderPasta(...recipe);

const me = {
  nickname: "junet",
  hobby: ["ngopi", "ngeteh", "molor"],
};

//Ambil Property Dari Object
const { nickname: el = "not found" } = me;

console.log(el);

//loop for untuk ambil object key

for (const key of Object.keys(restaurant)) {
  console.log(key);
}
