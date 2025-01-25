let s1 = "Hello"
let s2 = "World"
let s3 = "Hello"
let s4 = null

//String access
console.log("---")
console.log("s1[0] =", s1[0])
console.log("s1.charAt(0) =", s1.charAt(0))
console.log("s1[0] =", s1[15])
console.log("s1.charAt(15) =", s1.charAt(15))
console.log("---")

//String comparison
console.log("---")
console.log("s1 > s2 returned:", s1 > s2)
console.log("s1 === s3 returned:", s1 === s3)
console.log("s1 < s2 returned", s1 < s2)
console.log("---")

//Localcompare method
console.log("---")
console.log("s1.localeCompare(s2) returned:", s1.localeCompare(s2))
console.log("s1.localeCompare(s1) returned:", s1.localeCompare(s1))
console.log("s2.localeCompare(s1) returned:", s2.localeCompare(s1))
console.log("s1.localeCompare(null) returned:", s1.localeCompare(s4))
//console.log("s4.localeCompare(s1) returned:", s4.localeCompare(s1)) //Error
console.log("---")

//Strings are immutable
s1[0] = "B"             //No effects: strings are immutable
console.log(s1)         //Hello