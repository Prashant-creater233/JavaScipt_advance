// # Primitive Data Types
// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt


const score = 33;
const scorevalue = 33.5;

const isLoggedIn = true;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // false

const bigNumber = 3456789012345678901234567890n;

// Reference (Non-Primitive) Data Types
// 1. Object
// 2. Array
// 3. Function

const heros = ["shaktiman", "naagraj", "doga"]; //Array

let myObj = { //object
    name: "Prashant",
    age: 22,
};

const myFunction = function(){  // Function
    console.log("Hello, World!");
}

console.log(typeof score); // number
console.log(typeof scorevalue); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof outsideTemp); // object
console.log(typeof userEmail); // undefined
console.log(typeof id); // symbol
console.log(typeof bigNumber); // bigint
console.log(typeof heros); // object
console.log(typeof myObj); // object
console.log(typeof myFunction); // function