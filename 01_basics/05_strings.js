const name = "Prashant";
const repoCount = 50;

const repoInfo = `Hello, my name is ${name} and I have ${repoCount} repositories.`;
console.log(repoInfo);

const gameName = new String("GTA");
console.log(typeof gameName); // object

console.log(gameName[0]); // G
console.log(gameName.__proto__); 

console.log(gameName.length); // 3
console.log(gameName.toUpperCase()); // GTA
console.log(gameName.charAt(2)); // A
console.log(gameName.indexOf("T")); // 1

const newString = gameName.substring(0, 2);
console.log(newString); // GT

const anotherString = gameName.slice(-3, 1);
console.log(anotherString); // GT

const newStringOne = "  prashant  ";
console.log(newStringOne.trim()); // prashant

const url = "https://www.youtube.com/watch?v=1234567890";

console.log(url.replace("https://", "")); // www.youtube.com/watch?v=1234567890

console.log(url.includes("youtube")); // true

console.log(url.split("=")); // [ 'https://www.youtube.com/watch?v', '1234567890' ]