//Calling a global function
globalHello("John")

//Defining a function with name globalHello
function globalHello(param){
    console.log("Hello " + param)
}

//Defining a function reference
let myRef = globalHello;

//Calling globalHello using the reference into myRef 
myRef("John");
console.log(myRef)

console.log("---------------------------------")

//Defining a function expression
myExpression = function() {
    console.log("This is a function expression output")
}

//Calling function expression
myExpression();
console.log(myExpression)

console.log("---------------------------------")

//Arrow function
let myArrow = (a, b) => {
    console.log("Sum result:", a + b)
}

//Calling arrow function
myArrow(10, 5)