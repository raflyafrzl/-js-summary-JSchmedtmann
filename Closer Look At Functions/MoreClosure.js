let f;

//closure X
const g = function () {
  let x = 10;

  f = function () {
    console.log(x * 2);
  };
};

//setiap func ex di-reassign maka nilai closure pun akan berubah mengikuti
// present closure nya
//tanpa return closure juga bisa terjadi

const t = function () {
  let y = 12;
  f = function () {
    console.log(y * 2);
  };
};
