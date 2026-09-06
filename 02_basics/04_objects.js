// const tinderUser = new Object(); //singleton object

const tinderUser = {}; // object literal(non singleton object)

tinderUser.id = "123abc";
tinderUser.name = "Alice";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); // { id: '123abc', name: 'Alice', isLoggedIn: false }

const regularUser = {
    email: "alice@example.com",
    fullname: { 
    userfullname: {
        userfirstname: "Alice",
        userlastname: "Wonderland"
    }
    }
};

// console.log(regularUser.fullname.userfullname.userfirstname); // 'Alice'

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj4 = {5: "a", 6: "b"};

// const obj3 = Object.assign({}, obj1, obj2, obj4); // combines obj1, obj2, and obj4 into a new object
// console.log(obj3); // {1: "a", 2: "b", 3: "c", 4: "d", 5: "a", 6: "b"}

const obj3 = {...obj1, ...obj2, ...obj4}; // combines obj1, obj2, and obj4 into a new object using spread operator
console.log(obj3); // {1: "a", 2: "b", 3: "c", 4: "d", 5: "a", 6: "b"}


const users = [
    {
        id: 1,
        email: "alice@example.com"
    },
    {
        id: 2,
        email: "bob@example.com"
    },
    {
        id: 3,
        email: "charlie@example.com"
    }
]

console.log(users[1].email); // "bob@example.com"
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // ['id', 'name', 'isLoggedIn']
console.log(Object.values(tinderUser)); // ['123abc', 'Alice', false]
console.log(Object.entries(tinderUser)); // [['id', '123abc'], ['name', 'Alice'], ['isLoggedIn', false]]


console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true



const course = {
    coursename: "JavaScript",
    price: 999,
    courseInstructor: "Prashant Kanwal"
}

// course.courseInstructor = "Prashant K"; // update courseInstructor

const {courseInstructor: instructor} = course; // destructuring
console.log(instructor); // "Prashant Kanwal"


// {
//     "name": "Prashant",
//     "coursename": "JavaScript",
//     "price": 999
// }

[
    {},
    {},
    {}
]