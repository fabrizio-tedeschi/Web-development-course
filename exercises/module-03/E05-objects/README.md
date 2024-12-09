# Exercises 03.5 - JavaScript objects

### A) printObjectValues

Define two different objects:
 * The first object represents a `user` (that has name, surname, age, address and a list of favorites books)
 * The second object represents a `picture` (that has width, high and a list of colors)

Write a function `printObjectValues(obj)` that takes an object `obj` and prints all the object data using the following format:

```javascript
let myobj = {
    k1: "fisrtValue",
    k2: 3456
}

printObjectValues(myobj);
```
```
firstValue
3456
```

### B) productProperties

Write a script that creates three objects representing market products. Each product has a name and a cost. Ask the user
to insert three product into a list.
For each product in the list add it a boolean property `check` that is true if the product cost is lower than 30.
Print all the products in the list with all their properties.

> [!TIP]
> In order to take input data from the command line you have to install a node-module using the following lines.
>
> In the same directory of your code execute:
> `npm install prompt-sync`
> 
> At the beginning of your script use:
> `const prompt = require("prompt-sync")();`
> 
> Now you can require input using
> `let myinput = prompt("Question");`

### C) removeDuplicateSongs

Write a script that removes from the following list duplicate songs. Two songs are equals when their properties are all equals.

```javascript
let songs = [
    {title: "goosebumps", duration: "4:03"},
    {title: "Out of Time", duration: "3:34"},
    {title: "Out of Time remix", duration: "3:34"},
    {title: "goosebumps", duration: "4:03"},
]
```

### D) objectEquals

Write a function `objectEquals(o1, o2)` that takes two objects `o1` and `o2` and verifies if objects are equal. Two object
are equal if they have the same properties and the same values. Each object is equal to itself.

For example:

```javascript
let a = {k1: 12, k2: true}
let b = {k1: 12, k2: false}
let c = {a: 12, k2: true}
let d = {k1: 12, k2: true}

objectEquals(a, a);     //true
objectEquals(a, b);     //false
objectEquals(a, b);     //false
objectEquals(a, d);     //true
```

### E) carDealer

Write a script for a car dealer that manages car configuration. A car is an object with a model and a plate. For example:
`mycar = {model: "VW Taigo", plate: "HL567AB"}`

The customer could add the following packages to the car:

```javascript
let techpack = {display: true, gps: true, camera: true}
let safepack = {laneassist: true, emergencystop: true}
let interiors = {welcomelights: true, led: true, leathercover: true}
```

Try to create and print some care with different configurations (with different properties) for example:

```javascript
let mycar = {
    model: "VW Taigo",
    plate: "HL567AB",
    laneassist: true,
    emergencystop: true
}
```

> [!TIP]
> Use `Object.assign()` to add properties to cars.