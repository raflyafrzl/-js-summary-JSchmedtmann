//Set merupakan sebuah collection yang mana setiap nilainya adalah unik. jadi ketika terdapat
//nilai yang sama, maka nilai tersebut akan dihapus

const ordersSet = new Set([
  "Pasta",
  "Pasta",
  "Spagetthi",
  "Spagetthi",
  "Pizza",
]);

console.log(ordersSet); //Set(3) {'Pasta', 'Spagetthi', 'Pizza'}

//Method/var yang dimiliki oleh Set

console.log(ordersSet.add("Nasi Goreng"));
console.log(ordersSet.has("Pasta"));
ordersSet.delete("Pizza");
console.log(ordersSet);
console.log(ordersSet.size);

//loop set
for (const orders of ordersSet) console.log(orders);

//Ubah array ke set dan sebaliknya

const arr = ["rafly", "rafly", "rizki", "kamal", "afrizal", "pratama"];
const arrUnique = new Set(arr);

console.log(arrUnique);

//Ubah lagi ke array
const arrx = [...arrUnique];
console.log(arrx);
