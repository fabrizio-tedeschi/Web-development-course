function arrayFusion(a1, a2){
    let out = []

    if(a1.length !== a2.length){
        console.log("ERROR: array with different lengths");
        return out;
    }

    for(let i = 0; i < a1.length; i++){
        out.push(a1[i]);
        out.push(a2[i]);
    }

    return out;
}

console.log(arrayFusion([], []));
console.log(arrayFusion([1, 3, 5], [2, 4, 6]));
console.log(arrayFusion([1, 3], [2, 4, 6]));
console.log(arrayFusion([1, 3, 5], [2, 4]));