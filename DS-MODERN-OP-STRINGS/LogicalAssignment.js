const rest1 = {
  name: "La Piaza",
  numGuests: 0,
};

const rest2 = {
  name: "Warung Cumi Pak Kris",
  owner: "Pak Kris",
};
// rest1.numGuests = rest1.numGuests || 20;
// rest2.numGuests = rest2.numGuests || 20;

//dengan Logical Assignment  OR
// rest1.numGuests ||= 20;
// rest2.numGuests ||= 20;

//Dengan Nullish Assignment Operator
rest1.numGuests ??= 20;
rest2.numGuests ??= 20;

//==========AND============

//Dengan AND assignment. kita tidak membuat property baru
rest1.owner &&= "ANONYMOUS";
rest2.owner &&= "Anonymous";

console.log(rest1);
console.log(rest2);
