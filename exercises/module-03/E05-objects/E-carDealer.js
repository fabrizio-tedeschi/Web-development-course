let techpack = {display: true, gps: true, camera: true}
let safepack = {laneassist: true, emergencystop: true}
let interiors = {welcomelights: true, led: true, leathercover: true}

let carA = {model: "Fiat Panda", plate: "AB000AF"}
let carB = {model: "Skoda Fabia", plate: "GJ547KK"}
let carC = {model: "Audi A4", plate: "FJ008BD"}

Object.assign(carA, safepack)
Object.assign(carB, safepack, techpack)
Object.assign(carC, safepack, techpack, interiors)

console.log(carA)
console.log(carB)
console.log(carC)