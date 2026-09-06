const score = 100;
// console.log(score); // 100

const balance = new Number(100);
// console.log(balance); // [Number: 100]

// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); // 100.00
// console.log(balance.toFixed(1)); // 100.0

const anotherBalance = 123.3456789;
// console.log(anotherBalance.toPrecision(3)); // 123
// console.log(anotherBalance.toPrecision(2)); // 120

const hundred = 1000000;
// console.log(hundred.toLocaleString("en-US")); // 1,000,000


// *************** math ***************
console.log(Math.PI);
console.log(Math.abs(-100)); // 100
console.log(Math.round(4.7)); // 5
console.log(Math.floor(4.9)); // 4 //bottom
console.log(Math.ceil(4.3)); // 5 // top
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.max(1, 2, 3, 4, 5));   // 5
console.log(Math.random()); // 0.123456789  its value always between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1); // 1-10

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 10-20