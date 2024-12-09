function objectEquals(o1, o2){
    if(o1 == o2){
        return true;
    }

    for(key in o1) {
        if(o1[key] !== o2[key]){
            return false;
        }
    }

    return true;
}

let a = {k1: 12, k2: true}
let b = {k1: 12, k2: false}
let c = {a: 12, k2: true}
let d = {k1: 12, k2: true}

console.log(objectEquals(a, a));
console.log(objectEquals(a, b));
console.log(objectEquals(a, b));
console.log(objectEquals(a, d));