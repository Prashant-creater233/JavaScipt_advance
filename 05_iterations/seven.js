const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10 } ) // yha pe agar scope open kiya (curlie bracket) to filter ki tarah empty array nhi milega  undefined milega

const newNums = myNumbers
                .map( (num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40 )

console.log(newNums);
