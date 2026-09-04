"use strict"; // treat all JS code as newer version, helps to avoid errors

alert("Hello World!"); // we are using nodejs , not browser

// number => 2 to power 53
// bigint => 2 to power 63  
// string => "Hello World!"
// bolean => true or false
// null => empty value / standalone value
// undefined => value is not assigned
// symbol => unique identifier


// object => collection of data

console.log(typeof 123); // number
console.log(typeof 123n); // bigint
console.log(typeof "Hello World!"); // string
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof Symbol("id")); // symbol