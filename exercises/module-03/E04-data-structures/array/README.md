# Exercises 03.4 - Array

### A) getAllStudentsData

Given some parallel arrays:

```js
let IDs = [541, 567, 519, 500]
let names = ["John", "Lucy", "Alex", "Mary"]
let surnames = ["Doe", "Smith", "Norris", "Rose"]
let ages = [15, 18, 25, 34]
```

Write a function `getAllStudentsData()` that takes an `ID` and shows all data associated to the student with the id `ID`.

### B) marketQueueManager

Write a function `marketQueueManager()` that manages a market queue. A queue is an array `q = ["p1", "p2", ...]` where
the first element is the first person of the queue and the last element is the last person of the queue. The `marketQueueManager()`
has two features:

* `addToQueue(queue, user)`: that adds the user at the end of the queue
* `serveUser(queue)`: that removes the first user from the queue

For each feature implement the requested operation with a suitable debug message.

### C) arrayFusion

Write a function `arrayfusion()` that takes two initialized arrays. The program creates a new array containing all
elements from the first array alternate with all elements from the second array.

> Constraint: the arrays have the same length

Example:
`
v1: [1, 3, 5, 7, 9]
v2: [2, 4, 6, 8, 10]
out: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
`

### D) sortArray

Write two functions `sortArrayNumbers()` and `sortArrayStrings()` that order a given array.

Write also a function `sortAny()` that takes an array composed by elements having the same type. However, the type is unknown:
elements could be integers, strings or objects.

> [!TIP]
> You need to give a comparator (a function) as an argument of the function in order to compare different element types!

