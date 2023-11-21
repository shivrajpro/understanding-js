// USING bind method
let multiply = function (x, y) {
  //   console.log("x=", x, "y=", y);
  return x * y;
};

const multiplyBy2 = multiply.bind(this, 2);
console.log(multiplyBy2(3));

// using CLOSURES
const add = function (x) {
  return function (y) {
    console.log("x=", x, "y=", y);

    console.log(x + y);
  };
};

const add5 = add(5);
add5(3);
