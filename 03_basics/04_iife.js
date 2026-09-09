//  Immediately Invoked Function Expressions (IIFE)  isliye use krke ha global scope ke pollution ko htane ke liya iife ka use krta ha

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Prashant')