console.log("Numbers and strings")
console.log(5 == 5.01);
console.log(5 === "5");

console.log("Boolean values")
console.log(0 == false);
console.log(0 === false);

console.log("Null and undefined")
console.log(null == undefined);
console.log(null === undefined);
let a
console.log(a)

let p1 = {
    nome: "John",
    cognome: "Doe"
}

let p2 = {
    nome: "John",
    cognome: "Doe"
}

let p3 = p2;

console.log("Objects with different reference")
console.log(p1 == p2);
console.log(p1 === p2);

console.log("Objects with same reference")
console.log(p3 == p2);
console.log(p3 === p2);