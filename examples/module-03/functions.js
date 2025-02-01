//Defining a function with name f
function f(param){
    console.log("ciao " + param)
}

//Assigning the function reference to myVar
let myVar = f;

//Calling f using the reference in myVar 
myVar("John");

//Short function assigment to myVar
myVar = function() {
    console.log("TEST")
}
myVar();

//Arrow function
let myFunz = (p1, p2) => {
    console.log(p1, p2)
}
myFunz("Hello", "World!")