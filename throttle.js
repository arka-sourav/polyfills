const expensiveFn = (param1, param2) => {
  console.log("Expensive..", param1, param2);
};

const throttle = (func, delay) => {
  let flag = true;
  return function () {
    let context = this,
      args = arguments;
    if (flag) {
      func.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

let delay = 500;

const betterExpensiveFn = throttle(expensiveFn, delay);

//this is the final user input
window.addEventListener("resize", () => betterExpensiveFn("arg1", "arg2"));
