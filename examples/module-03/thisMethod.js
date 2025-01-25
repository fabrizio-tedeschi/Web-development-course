//Creating an object with some properties
let personA = {
    name: "John",
    surname: "Doe",
    age: 16
}

let personB = {
    name: "Mary",
    surname: "Smith",
    age: 21
}

//Defining a function that prints object values
let f = function(){
    console.log("---");
    console.log("name =", this.name);
    console.log("surname =", this.surname);
    console.log("age =", this.age);
    console.log("---");
}

//Adding the function as an object method
personA.printData = f;
personB.printData = f;

//Calling the object method
personA.printData()
personB.printData()

//Note that "this" referes to the current object properties