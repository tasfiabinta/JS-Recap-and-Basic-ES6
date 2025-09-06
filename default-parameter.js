// function sum(num1, num2) {
//   const result = num1 + num2;
//   //console.log(num1, num2);

//   console.log(result);
// }
//sum(10, 20); //30

//**********if any parameter value is missing********

//console.log(num1, num2); // 10 undefined
//sum(10); //NaN

/************using default parameter*****/

function sum(num1 = 0, num2 = 0) {
  const result = num1 + num2;
  //   console.log(num1, num2);

  console.log(result);
}

//sum(10, 20); //30

//sum(10); // num1 = 10 num2= 0  result = 10

//sum(); // num1 = 0 num2= 0  result = 0

function multiply(num1 = 1, num2 = 1) {
  const result = num1 * num2;
  console.log(result);
}

//multiply(10, 30); //300

multiply(40); // 40 * 1 = 40

//default parameter will be set according to the necessary of work

// sum = 0

//subtract = 0

//multiply = 1

//string = ''
