const accountId = 16384
let accountEmail = "prashant@example.com"
var accountPassword = "12345"
accountCity = "New Delhi"
let accountState

// accountId = 245
accountEmail = "prashant.updated@example.com"
accountPassword = "123456"
accountCity = "Mumbai"

console.log(accountId);


/*
prefer not to use var, use let and const instead.
because of issue in block scope and functional scope
*/

console.table({
    accountId,
    accountEmail,
    accountPassword,
    accountCity,accountState
});