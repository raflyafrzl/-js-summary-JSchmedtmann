const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/* convert movement from EURO to USD */
const eurToUsd = 1.1;

const movementUsd = movements.map(el => el * eurToUsd);
console.log(movementUsd);
console.log(movements);

const movementsUsdFor = [];
for (const mov of movements) {
  movementsUsdFor.push(mov * eurToUsd);
}
console.log(movementsUsdFor);
