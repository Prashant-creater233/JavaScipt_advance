const coding = ["js", "ruby", "java", "python", "cpp"]

// const values =  coding.forEach( (item) => {
//     console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4 )   // scope open nhi kiya ha to return use nhi krna hoga

// const newNums = myNums.filter( (num) => {  // scope open kiya ha to return use krna hoga
//     return num > 4
// } )


// ye bhi same kam kr rha ha as a filter jaisa hi bs isme thoda logic lg rha ha
// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);



const books = [
    { title: 'Book One', genre: 'Friction', publish: 1987, edition: '2004' },
    { title: 'Book Two', genre: 'history', publish: 1982, edition: '2005' },
    { title: 'Book Three', genre: 'Non-Friction', publish: 1999, edition: '2006' },
    { title: 'Book Four', genre: 'Friction', publish: 2001, edition: '2012' },
    { title: 'Book Five', genre: 'history', publish: 1998, edition: '2001' },
    { title: 'Book Six', genre: 'Non-Friction', publish: 1901, edition: '2000' },
    { title: 'Book Seven', genre: 'Friction', publish: 2003, edition: '2009' },
    { title: 'Book Eight', genre: 'history', publish: 1967, edition: '2003' },
    { title: 'Book Nine', genre: 'Non-Friction', publish: 1941, edition: '2007' },
];

// const userBooks = books.filter( (bk) => bk.genre === "history" )

const userBooks = books.filter( (bk) => {
    return (bk.publish >= 1995 && bk.genre === "history")
} )
console.log(userBooks)