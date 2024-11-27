# Exercises 03.4 - JavaScript data types

>[!NOTE]
>To start a js file on youre terminal you need to install nodeJS and execute the following command `node filename.js`

## Strings

### A) getRepeatedChars

Write a function `getRepeatedChars()` that takes two strings `s1` and `s2`. The function returns a new string `out` that
is composed by all chars from `s1` that appears in `s2`. In case of repeated chars the `out` string contains only one
occurrence of the char. For example:

```
s1 = "hey world", s2 = "home", out = "heo"
s1 = "hello world", s2 = "home land", out = "helo d"
```

### B) checkEmailManager

Write a function `checkEmailManager()` that takes an email and shows the name of the email manager.
The function knows only three email manager, GOOGLE, MICROSOFT, APPLE. When the manager is unknown the function shows the final email segment. For example:

```
john.doe@gmail.com --> GOOGLE LLC
mary.rose@outlook.com --> MICROSOFT CORP.
tim.cook@icloud.com --> APPLE INC.
lebron.james@libero.it --> @libero.it
```

### C) onlyThreeMultiples

Write a function `onlyThreeMultiples()` that takes a string `s` and shows a new `out` string composed only by chars from `s` that has multiple of 3 position. For example:

```
s = "mystring", out = "tn"
s = "mysecond string", out = "ensi"
```

## Arrays

### D) getAllStudentsData

Given some parallel arrays:

```js
let IDs = [541, 567, 519, 500]
let names = ["John", "Lucy", "Alex", "Mary"]
let surnames = ["Doe", "Smith", "Norris", "Rose"]
let ages = [15, 18, 25, 34]
```

Write a function `getAllStudentsData()` that takes an `ID` and shows all data associated to the student with the id `ID`.

### E) marketQueueManager

Write a function `marketQueueManager()` that manages a market queue. A queue is an array `q = ["p1", "p2", ...]` where
the first element is the first person of the queue and the last element is the last person of the queue. The `marketQueueManager()`
has two features:

* `addToQueue(queue, user)`: that adds the user at the end of the queue
* `serveUser(queue)`: that removes the first user from the queue

For each feature implement the requested operation with a suitable debug message.

### F) sortArray

Write two functions `sortArrayNumbers()` and `sortArrayStrings()` that order a given array.

Write also a function `sortAny()` that takes an array composed by elements having the same type. However, the type is unknown:
elements could be integers, strings or objects.

> [!TIP]
> You need to give a comparator (a function) as an argument of the function in order to compare different element types!

### G) arrayFusion

Write a function `arrayfusion()` that takes two initialized arrays. The program creates a new array containing all
elements from the first array alternate with all elements from the second array.

> Constraint: the arrays have the same length

Example:
`
v1: [1, 3, 5, 7, 9]
v2: [2, 4, 6, 8, 10]
out: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
`

## Maps

### H)

### I)

### J)

## JSON

### K)

### L)

### M)