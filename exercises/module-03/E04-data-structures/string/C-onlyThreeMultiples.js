function onlyThreeMultiples(str){
    out = "";

    for(let i = 0; i < str.length; i++){
        if(i % 3 === 0 && i !== 0){
            out = out + str.charAt(i);
        }
    }

    return out;
}

res = onlyThreeMultiples("mystring");
console.log(res);
res = onlyThreeMultiples("mysecond string");
console.log(res);