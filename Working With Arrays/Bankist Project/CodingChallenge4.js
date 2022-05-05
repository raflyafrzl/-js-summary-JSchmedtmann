const dogs = [
  {
    weight: 22,
    curFood: 250,
    owners: ['Alice', 'Bob'],
  },
  {
    weight: 8,
    curFood: 200,
    owners: ['Matilda'],
  },
  {
    weight: 13,
    curFood: 275,
    owners: ['Sarah', 'John'],
  },
  {
    weight: 32,
    curFood: 340,
    owners: ['Michael'],
  },
];

//Number 1
dogs.forEach(function (el) {
  el.recommendFood = Math.trunc(el.weight ** 0.75 * 28);

  console.log(el.recommendFood);
});

console.log();
//Number 2
dogs.forEach(function (el) {
  if (el.owners.includes('Sarah')) {
    console.log(
      `${
        el.recommendFood < el.curFood
          ? 'Dog is eating to much'
          : 'Dogs is eating too little'
      }`
    );
  }
});

//number 3 by jonas
const ownersEatsTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendFood)
  .flatMap(dog => dog.owners);

//number 3 by me

// const { ownersEatsTooMuch, ownersEatTooLittle } = dogs.reduce(
//   (dog, el) => {
//     dog[
//       el.recommendFood < el.curFood ? 'ownersEatsTooMuch' : 'ownersEatTooLittle'
//     ].push(el.owners);

//     return dog;
//   },

//   { ownersEatsTooMuch: [], ownersEatTooLittle: [] }
// );

console.log(ownersEatsTooMuch);
console.log(ownersEatTooLittle);

//number 4

console.log(ownersEatsTooMuch + "'s dogs eath too much");
console.log(ownersEatTooLittle + "'s dogs eat too little");

//number 5

//by jonas

// const someAmount = dogs.some(el => el.curFood === el.recommendFood);

//by me
const exactAmount = dogs.reduce((acc, el) => {
  acc = el.curFood === el.recommendFood ? acc || true : acc || false;
  return acc;
}, false);
console.log(exactAmount);

//number 6

const okayAmount = dogs.some(
  el =>
    el.curFood > el.recommendFood * 0.9 && el.curFood < el.recommendFood * 1.1
);

console.log(okayAmount);

//number 7
const okayDogs = dogs.filter(
  el =>
    el.curFood > el.recommendFood * 0.9 && el.curFood < el.recommendFood * 1.1
);

console.log(okayDogs);

//number 8

//by jonas
const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendFood - b.recommendFood);

console.log(dogsSorted);

//by me

const shallowDogs = [...dogs];

shallowDogs.sort((a, b) => {
  return a.recommendFood - b.recommendFood;
});

console.log(shallowDogs);
