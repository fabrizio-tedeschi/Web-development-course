function getRepeatedChars(s1, s2) {
    let out = "";

    if(s1 === null || s2 === null){
        console.log("Input error");
        return out;
    }

    if(s1.length === 0 || s2.length === 0){
        console.log("Input error");
        return out;
    }

    for(let i = 0; i < s1.length; i++){
        let c = s1.charAt(i);

        for(let j = 0; j < s2.length; j++){
           
            if(c === s2.charAt(j) && out.indexOf(c, 0) < 0){
                out = out + s1.charAt(i);
            }
        }
    }

    return out;
}

console.log(getRepeatedChars("hello", null));
console.log(getRepeatedChars("hi!", ""));
console.log(getRepeatedChars("hey world", "home"));
console.log(getRepeatedChars("hello world", "home land"));