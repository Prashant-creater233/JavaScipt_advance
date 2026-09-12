const user = {
    username: "prashant",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// new ek constructor function ha nya context banane ke liya kaam aata ha
// step1 nya empty object create hota ha
// step2 constructor function call hota ha new keyword ke karan
// step3 this me arguments iya ha vo inject ho jate ha 
// step4 function ke andar mil jate ha

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.lologinCount =loginCount;
    this.isisLoggedIn =isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this;
}

const userOne = new User("prashant1", 12, true)
const userTwo = new User("himanshu", 11, false)

// console.log(userOne)
console.log(userOne.constructor)
// console.log(userTwo)