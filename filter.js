//Polyfill for filter

//Array.filter((elem, i, arr) => {})

//NOTE- Do NOT use array function here instead of function(cb)
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

//usage
const nums = [1, 2, 3, 6, 8];

const numGreaterThan2 = nums.myFilter((num, i, arr) => {
  return num > 2;
});

console.log(numGreaterThan2);
