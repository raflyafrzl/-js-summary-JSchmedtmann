const arr = [4, 1, 2, 3];

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
