// Debouncing in Javascript
let counter = 0;
const getData = (param1, param2) => {
  // calls an API and gets Data
  console.log("Fetching Data ..", counter++, param1, param2);
};

const debounce = function (fn, delay) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const betterFunction = debounce(getData, 300);
