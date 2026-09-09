const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){  // 1st method
//     console.log(val);
// } )

// coding.forEach( (item) => {   // 2st method
//     console.log(item)
// } )

// function printMe(item) {   // 3st method
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {   
//     console.log(item, index, arr)
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
} )