//object destructuring

// const products = { name: "samsung", price: 30000, quantity: 5 };

//previous way to use one property of object

// const discount = products.price*20/100
// const youPay = products.price-discount
// const vat = products.price *7/100
// const totalPay = youPay+vat

// const price = products.price;
// const discount = (price * 20) / 100;
// const youPay = price - discount;
// const vat = (price * 7) / 100;
// const totalPay = youPay + vat;

//destructuring

//const { price } = { name: "samsung", price: 30000, quantity: 5 };
//console.log(price);//30000

// const discount = (price * 20) / 100;
// const youPay = price - discount;
// const vat = (price * 7) / 100;
// const totalPay = youPay + vat;
//console.log(totalPay);//26100

//const { price, quantity, tax } = { name: "samsung", price: 30000, quantity: 5 };
//console.log(price, quantity, tax); //30000 5 undefined (tax is undefined cz there is no value of tax)

const {
  price,
  quantity,
  tax = 7,
} = { name: "samsung", price: 30000, quantity: 5 };
//console.log(price, quantity, tax); //30000 5 7

const device = { name: "phone", brand: "samsung", price: 40000 };
const { brand } = device; //also write like this way

//-------------------------------------------------------------------------//

//array destructuring

const numbers = [30, 40];

const [first, second] = numbers;
console.log(first, second); //30 40

const [math, physics, chemistry = 95] = [90, 85];
//console.log(math, physics, chemistry); //90 85 undefined
console.log(math, physics, chemistry); //90 85 95
