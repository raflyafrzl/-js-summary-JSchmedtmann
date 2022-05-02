const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//jika includes hanya untuk persamaan, maka jika ingin menspesifikasikan
// menggunakan some()

const movementPositive = movements.some(mov => mov > 0);
console.log(movementPositive);
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

fruits.splice(2, 0, 'Lemon', 'Kiwi');
console.log(fruits);

//every method = > sama seperti some method, namun hanya mengembalikan true jika semua kondisi(nilai array) benar
