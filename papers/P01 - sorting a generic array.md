# Functions as arguments

## Assignment
You want to define a function `selectionSort()` that sorts an array (filled by elements of same type) using the *selection sort algorithm*.

### Issue
In JavaScript an array could contain integers, floats and strings and also objects.

* You can compare numbers using `<`, `>`, `==`. These operators return `true` or `false` as result.

```javascript
console.log(15 > 4)             //true
console.log(27.5 > 26)          //false
```

* You can compare strings using `<`, `>`, `==`. These operators return `true` or `false` as result. For example, the string `ab` is lower than `ac` because it comes previous applying the alphabetical order.

```javascript
console.log("ab" < "ac")       //true
console.log("ab" == "ac")      //false
```

* You CAN'T compare objects using `<`, `>`, `==`. The operator `==` returns `true` if two objects have the same reference. How can an object be greater or lower than another? It depends!

For example, you can compare object that represents people by name, surname or age!

```javascript
{"name": "Mary", "surname": "Smith", "age": 18},
{"name": "Lee", "surname": "Uang", "age": 30},
{"name": "John", "surname": "Doe", "age": 19}
```

Now, tou can define different functions like `selectionSortIntegers()`, `selectionSortStrings()`, `selectionSortObjectsByName()`, `selectionSortObjectsByAge()`...

This is a very bad idea, all the `selectionSort...()` functions are very similar, they change only into the line that compares array elements. This event is called *code duplication* and brings some side effects:

* You have to define a lot of functions
* If an error occurs in one function, you have to fix manually all the other functions
* If you want to use a different sorting algorithm (like bubble sort), you have to change all the functions or to define a new function set.

## Strategy

A useful JavaScript feature consists of functions-as-value representation. In fact, you can consider the function code as a value. You can also insert the function code into a variable (using a [function expression](https://javascript.info/function-expressions)).

```javascript
let myFunct = function(){
    console.log("I am a function expression!")
}

myFunct()       //I am a function expression!
```

Now, you can give your `selectionSort()` an array of elements and also a comparator function that allows to compare elements in different ways. The function could have the following structure:

```javascript
let comparator = function(a, b){...} 
```

The function takes two different elements and...

* If `a < b` the comparator returns `-1` (or a negatve number) 
* If `a = b` the comparator returns `0`
* If `a > b` the comparator returns `1` (or a positive number)

You can define the element comparison (`<`, `>`, `=`) as you prefer inside your `comparator`. For example:

```javascript
let compareIntegers = function(a, b){
    return a - b
} 

let compareStrings = function(a, b){
    return a.localeCompare(b)
} 

let comparePeopleByName = function(a, b){
    return a["name"].localeCompare(b["name"])
} 

let comparePeopleByAge = function(a, b){
    return a["age"] - b["age"]
} 
```

## Code implementation

Now you can define your `selectionSort()` and call the `comparator()` when you need to compare two array elements.

```javascript
function selectionSort(list, comparator){
    for(let i = 0; i < list.length; i++){
        for(let j = 0; j < list.length; j++){
            if(comparator(list[i], list[j]) > 0){
                tmp = list[i];
                list[i] = list[j]
                list[j] = tmp
            }
        }
    }
}
```

### Extension

Now you can make your *comparators* more useful implementing different sorting algorithms! For example, bubble sort!

```javascript
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
```