const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//jika includes hanya untuk persamaan, maka jika ingin menspesifikasikan
// menggunakan some()

const movementPositive = movements.some(mov => mov > 0);
console.log(movementPositive);

//every method = > sama seperti some method, namun hanya mengembalikan true jika semua kondisi(nilai array) benar
