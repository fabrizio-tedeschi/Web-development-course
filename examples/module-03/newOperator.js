//Defining constructor
function User(name, surname, age){
    
    if(!new.target){
        console.log("Error: missing \'new\' operator")
    }
    
    this.name = name;
    this.surname = surname;
    this.age = age;

    this.sayHi = function(){
        console.log("Hi, my name is " + this.name)
    }
}

console.log("\nCreating user without \'new\'...")
let u1 = User("John", "Doe", 16);

console.log("\nCreating user with \'new\'...")
let u2 = new User("Mary", "Smith", 21);

console.log("\nPrinting u2...")
console.log(u2)

console.log("\nCalling u2.sayHi()...")
u2.sayHi()