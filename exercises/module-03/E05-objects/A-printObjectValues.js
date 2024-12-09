function printObjectValues(obj) {
    for (let key in obj) {
        console.log(key + " = " + obj[key]);
    }
}

let user = {
    name: "John",
    surname: "Doe",
    age: 32,
    books: ["Maths", "Italian", "History"]
}

let picture = {
    width: 235,
    height: 200,
    colors: ["red", "green", "blue"]
}

printObjectValues(user);
printObjectValues(picture);
printObjectValues({});

console.log(user);
console.log(picture);