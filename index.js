Array.prototype.filter2 = function (fn) {
  const newArr = [];
  for (let index = 0; index < this.length; index++) {
    if (fn(this[index], index, this)) {
      newArr.push(this[index]);
    }
  }

  return newArr;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.filter2((element, index, array) => element > 3);

console.log(arr);

Array.prototype.map2 = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (this[i]) {
      const value = callback(this[i], i, this);
      result.push(value);
    }
  }

  return result;
};

const arr1 = arr.map2((num) => {
  return num ** 2;
});

console.log(arr1);
