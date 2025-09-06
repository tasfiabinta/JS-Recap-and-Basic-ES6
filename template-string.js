//template string = `lines`

//variable or expression can be embedded directly by using '${}' syntax .

function sum(num1, num2) {
  const result = num1 + num2;
  const output = `sum of ${num1} and ${num2} is equal to ${result}`;
  console.log(output);
}

sum(20, 30); // sum of 20 and 30 is equal to 50

const price = 50;

const discountedPrice = `Discount price of ${price} after 20% discount is ${
  price * 0.8
}`;

console.log(discountedPrice); //Discount price of 50 after 20% discount is 40
