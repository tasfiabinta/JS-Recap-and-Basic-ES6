// function declaration

function add(num1, num2) {
  return num1 + num2;
}

//function expression

const additon = function (num1, num2) {
  return num1 + num2;
};

//arrow function

const add2 = (num1, num2) => num1 + num2;

const result = add2(20, 10);
console.log(result);

const multiply = (a, b) => a * b;

const mult = multiply(4, 9);
console.log(mult);

const isBig = (x, y) => x > y;

const big = isBig(9, 7);
console.log(big);

//multi line arrow function

const doMath = (x, y) => {
  const double = x * 2;
  const againDouble = y * 2;
  const output = double + againDouble;
  return output;
};

const output2 = doMath(5, 3);
console.log(output2);
