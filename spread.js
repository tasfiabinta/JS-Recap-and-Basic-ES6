//spread operator : ...varName

//max

const a = [1, 2, 3, 5];
//console.log(Math.max(a)); //NaN

console.log(Math.max(...a)); //5

//copy an array

// const first = [2, 4, 6, 8];
// const second = first;
// second.push(10);
// console.log(first); //[ 2, 4, 6, 8, 10 ]
// console.log(second);//[ 2, 4, 6, 8, 10 ]

// const second = [];
// second.push(10);
// console.log(second);  output : [10]

const first = [3, 4, 5];
const second = [...first];
second.push(6);

//console.log(second); //[ 3, 4, 5, 6 ]
//console.log(first); //[ 3, 4, 5 ]

const p = [2, 5, 3, 9];
const q = [1, 4, ...p, 8, 7];
//console.log(q); //[1, 4, 2, 5,3, 9, 8, 7]

const person = { name: "Jungkook", age: 28 };
const employee = { ...person, designation: "Dev" };

console.log(employee);

const total = (a, b, c) => a + b + c;

const result = total(12, 56, 34); //102

const digit = [65, 87, 75];
total(...digit);
console.log(total(...digit)); //227
