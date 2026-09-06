// Dates
const myDate = new Date();
// console.log(myDate); //  Mon Oct 02 2023 12:00:00 GMT+0530 (India Standard Time)
// console.log(myDate.toString()); // Mon Oct 02 2023 12:00:00 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleString()); // 2/10/2023, 12:00:00 PM
// console.log(myDate.toDateString()); // Mon Oct 02 2023
// console.log(typeof myDate); // object

const myCreatedDate = new Date(2023, 9, 2); // Note: Months are zero-indexed
// console.log(myCreatedDate); // Mon Oct 02 2023 00:00:00 GMT+0530 (India Standard Time)

const myTimeStamp = Date.now();
// console.log(myTimeStamp); // 1696166400000
// console.log(Math.floor(myTimeStamp / 1000)); // 1696166400  we can convert milliseconds to seconds by dividing by 1000


// console.log(myDate.getDate()); // 2
// console.log(myDate.getMonth()); // 9
// console.log(myDate.getFullYear()); // 2023

console.log(myDate.toLocaleString('default', { 
    weekday: 'long' 
})); // Sunday