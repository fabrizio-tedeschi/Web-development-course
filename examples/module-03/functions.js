//Calling a global function
globalHello("John")

//Defining a function with name f
function globalHello(param){
    console.log("Hello " + param)
}

//Defining a function expression
let myRef = globalHello;

//Calling globalHello using the reference into myVar 
myRef("John");
console.log(myRef)

console.log("---------------------------------")

//Defining a function expression
myExpression = function() {
    console.log("This is a function expression output")
}
myExpression();
console.log(myExpression)

console.log("---------------------------------")

//Arrow function
let myArrow = (a, b) => {
    console.log("Sum result:", a + b)
}
myArrow(10, 5)