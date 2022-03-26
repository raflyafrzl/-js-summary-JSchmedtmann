/* Coding Challenge 1 */
const checkDogs = function (paramKate, paramJulia) {
  const juliaDogs = paramJulia.slice(1, -2);
  console.log(juliaDogs);
  const newKateJulia = [...juliaDogs, ...paramKate];
  console.log(newKateJulia);
  newKateJulia.forEach(function (el, i) {
    if (el >= 3) {
      console.log(`Dog Number ${i + 1} is an adult, and is  ${el} yo`);
    } else {
      console.log(`Dog Number ${i + 1} is still a puppy 🐶`);
    }
  });
};

const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];
checkDogs(kate, julia);
