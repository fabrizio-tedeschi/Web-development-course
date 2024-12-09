const prompt = require("prompt-sync")();

let products = [];

for (let i = 0; i < 3; i++) {
    products[i] = {};
    products[i]["name"] = prompt("Insert product's name: ");
    products[i]["cost"] = Number(prompt("Insert product's cost: "));
    console.log();
}

for (let i = 0; i < 3; i++) {
    if (products[i]["cost"] < 30) {
        products[i]["check"] = true;
    }
    else{
        products[i]["check"] = false;
    }

    console.log(products[i]);
}