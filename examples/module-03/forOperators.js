let picture = {
    widh: 15,
    heigh: 12,
    colors: ["red", "green", "blue"]
}

//Iterating on iterable values
for(v of "hello"){
    console.log(v);
}

console.log()

for(v of picture["colors"]){
    console.log(v);
}

console.log()

//Iterating on object keys
for(k in picture){
    console.log(k);
}

