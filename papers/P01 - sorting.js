//Defining arrays
n = [75, 2, 0, 1, 25, 32, 75, 27]

let v = [
    {"name": "Mary", "surname": "Smith", "age": 18},
    {"name": "Lee", "surname": "Uang", "age": 30},
    {"name": "John", "surname": "Doe", "age": 19}
]

//Defining comparators
let compareIntegers = (a, b) => {
    return a - b
}

let comparePeopleByName = function(o1, o2){
    return o1["name"].localeCompare(o2["name"])
}

let comparePeopleBySurname = function(o1, o2){
    return o1["surname"].localeCompare(o2["surname"])
}

let comparePeopleByAge = function(o1, o2){
    return o1["age"] - o2["age"]
}

//Defining sort algorithms
function selectionSort(list, comparator){
    for(let i = 0; i < list.length; i++){
        for(let j = i; j < list.length; j++){
            if(comparator(list[i], list[j]) > 0){
                tmp = list[i];
                list[i] = list[j]
                list[j] = tmp
            }
        }
    }
}

function bubbleSort(list, comparator){
    do{
        swap = false
        for(let i = 0; i < list.length - 1; i++){
            if(comparator(list[i], list[i+1]) > 0){
                tmp = list[i];
                list[i] = list[i+1]
                list[i+1] = tmp
                swap = true
            }
        }
    }while(swap)
}

//Calling functions
console.log("Array:", v)
console.log()

console.log("Sorting by name...")
selectionSort(v, comparePeopleByName)
console.log(v)

console.log("Sorting by surname...")
selectionSort(v, comparePeopleBySurname)
console.log(v)

console.log("Sorting by age...")
selectionSort(v, comparePeopleByAge)
console.log(v)

console.log("Array:", n)
console.log("Bubble sort...")
bubbleSort(n, compareIntegers)
console.log(n)