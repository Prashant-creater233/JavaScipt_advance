// array
const myArr = [1, 2, 3, 4, 5];
console.log(myArr); // [1, 2, 3, 4, 5]

console.log(myArr[0]); // 1
console.log(myArr[4]); // 5

// Array methods
myArr.push(6); // add element at the end
myArr.push(7);
myArr.pop(); // remove element from the end
console.log(myArr); // [1, 2, 3, 4, 5, 6]

myArr.unshift(9); // add element at the beginning
myArr.shift(); // remove element from the beginning
console.log(myArr); // [1, 2, 3, 4, 5, 6]

console.log(myArr.length); // 6
console.log(myArr.indexOf(3)); // 2 
console.log(myArr.includes(4)); // true

const myNewArr = myArr.join() // convert array to string
console.log(myNewArr); // 1,2,3,4,5,6
console.log(typeof myNewArr); // string

const myNewArr2 = myArr.join(" - ") // convert array to string with separator
console.log(myNewArr2); // 1 - 2 - 3 - 4 - 5 - 6



// slice and splice
const myArr3 = [1, 2, 3, 4, 5];
console.log(myArr3.slice(1, 4)); // [2, 3, 4] // slice(start, end) // end is not included
console.log(myArr3); // [1, 2, 3, 4, 5] // original array is not modified

console.log(myArr3.splice(1, 2)); // [2, 3] // splice(start, deleteCount) // modifies the original array
console.log(myArr3); // [1, 4, 5] // original array is modified