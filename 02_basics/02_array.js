const marvel_heroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye"];
const dc_heroes = ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman", "Cyborg"];

marvel_heroes.push(dc_heroes); // add dc_heroes array at the end of marvel_heroes array
console.log(marvel_heroes); // ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye", ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman", "Cyborg"]]          

// concat method
const all_heroes = marvel_heroes.concat(dc_heroes); // merge two arrays
console.log(all_heroes); // ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye", "Batman", "Superman", "Wonder Woman", "Flash", "Aquaman", "Cyborg"]   

//spread operator
const all_heroes2 = [...marvel_heroes, ...dc_heroes]; // merge two arrays using spread operator
console.log(all_heroes2); // ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye", "Batman", "Superman", "Wonder Woman", "Flash", "Aquaman", "Cyborg"]  

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10]];
console.log(anotherArr.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // flat method flattens the array


console.log(Array.isArray("Prashant")); // false
console.log(Array.isArray({name: "Prashant"})); // false

console.log(Array.from("Prashant")); // ["P", "r", "a", "s", "h", "a", "n", "t"]  // convert string to array
console.log(Array.from({name: "Prashant"})); // []    intersting case, it will return empty array because object is not iterable


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // [100, 200, 300]  // convert values to array