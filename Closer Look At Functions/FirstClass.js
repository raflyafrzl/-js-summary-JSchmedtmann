function count() {
  let counter = 1;

  return function () {
    counter++;
  };
}

console.log(count());
