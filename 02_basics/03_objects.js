// singleton object

// object literal

const mySym = Symbol("key1");

const jsUser = {
    name: "Prashant",
    "full name": "Prashant Kanwal",
    [mySym]: "mykey1",
    age: 25,
    city: "New York",
    email: "prashant@123",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
};

// console.log(jsUser.email); // prashant@123
// console.log(jsUser["email"]); // prashant@123
// console.log(jsUser["full name"]); // Prashant Kanwal
// console.log(jsUser[mySym]); // mykey1

jsUser.email = "prashant@456"; // update email
// Object.freeze(jsUser); // freeze the object, now we can't update or delete any property
jsUser.email = "prashant@789"; // this will not update the email due to freezing
// console.log(jsUser);

jsUser.greeting = function() { // add method to object
    console.log("Hello JS User");
}

jsUser.greeting2 = function() { // add another method to object
    console.log(`Hello ${this.name}`); // this refers to the current object
}

console.log(jsUser.greeting()); // call the method
console.log(jsUser.greeting2()); // call the method