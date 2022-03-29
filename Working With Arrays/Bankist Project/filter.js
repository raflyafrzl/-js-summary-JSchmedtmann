const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(el => el > 0);
console.log(movements);
console.log(deposits);

const withdrawals = movements.filter(el => el < 0);

console.log(withdrawals);
