const prompt = require("prompt-sync")();

let products = [];

for (let i = 0; i < 3; i++) {
    products[i] = {};
    products[i]["name"] = prompt("Insert product's name: ");
    products[i]["cost"] = Number(prompt("Insert product's cost: "));
    console.log();
}

for (product of products) {
    if (product["cost"] < 30) {
        product["check"] = true;
    }
    else{
        product["check"] = false;
    }
}

console.log(products);