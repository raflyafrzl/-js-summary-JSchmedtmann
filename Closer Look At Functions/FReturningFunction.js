const greet = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

//disini berarti variable greeterHey memegang value dari return function greet
//yang berarti sekarang greeterHey adalah sebuah function
const greeterHey = greet("Halo, ");

//kemudian greeterHey dipanggil lagi dengan () karena nilainya adalah function
greeterHey("Rafly");

//atau bisa dengan cara seperti ini

greet("Halo,")("Raflyafrizal");
