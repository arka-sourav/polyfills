//Polyfill for map

//Array.map((elem, i, arr) => {})

//NOTE- Do NOT use array function here instead of function(cb)
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

//usage
const nums = [1, 2, 3, 6, 8];

const multiply3 = nums.myMap((num, i, arr) => {
  return num * 3;
});

console.log(multiply3);
