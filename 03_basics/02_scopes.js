let a =300

if(true) {
    let a =10
    const b=20

    // console.log("INNER", a)
    // console.log("INNER", b)
}

// console.log(a);


// Nested Scope

function one(){
    const username = "Prashant"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

one()


console.log(addone(5)); // agar aisa function bnayenge to phele call kr sakte ha

function addone(num){
    return num + 1
}


// console.log(addTwo(5));    // cannot access before variable me store wala function ko phele nhi kr sakta baad me krna hoga

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5));
