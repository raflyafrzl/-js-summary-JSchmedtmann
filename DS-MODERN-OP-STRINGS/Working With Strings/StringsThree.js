//method split(args) -> digunakan untuk memisahkan suatu string berdasarkan argument nya
//Dan mengembalikan nilai array
//ex

const [firstName, lastName] = "Rafly Afrizal".split(" ");

console.log(firstName, lastName);

//Method join(args) ->Kebalikan dari split

const newName = ["Tuan", firstName, lastName].join(" ");

console.log(newName);

//Split method

const capitalizeName = function (argument) {
  const names = argument.split(" ");
  const nameArray = [];
  for (const listname of names) {
    nameArray.push(listname.replace(listname[0], listname[0].toUpperCase()));
  }

  return nameArray;
};

console.log(capitalizeName("muhammad rafly afrizal pratama"));

//Latihan Masking

const masking = function (number) {
  const numberString = number + "";
  const sliceString = numberString.slice(-4);
  return sliceString.padStart(numberString.length, "*");
};

console.log(masking("19023136892128903789"));
