//Polyfill for reduce

//Array.reduce((accumulator, elem, i, arr) => {}, initialValue)

//NOTE- Do NOT use array function here instead of function(cb, initialValue)
Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

//usage
const nums = [1, 2, 3, 4];

const sum = nums.myReduce((acc, num, i, arr) => {
  return acc + num;
}, 0);

console.log(sum);
