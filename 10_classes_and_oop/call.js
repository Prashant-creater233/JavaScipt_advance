function SetUsername(username){
    this.username = username
    console.log("Called")
}

function createUser(username, email, password){
    const setcall = SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "cahi@123", "123")
console.log(chai);
