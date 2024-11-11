# Exercises 03.3 - JavaScript functions

### A) average

Write a script that asks the user a positive value `n`. The scrip asks the user `n` positive numbers and shows
the average. Create an `average()` function to solve the exercise.

### B) signupFields

Create a webpage with fields about user data (name, surname, age, email).
When the user click on the "subscribe" button the `subscribe()` function is executed.

The `subscribe()` function:
* Shows an alert message if the user age is a not allowed value
* Shows an alert message if the user age is < 18
* Shows an alert message if email does not contain the character `@`
* Shows an alert message about successfully subscription in the other cases

>[!TIP]
> Search info about `document.getElementById()` and `Number.isInteger()`

## Function expression

### C) checkEven

Write a script that takes a numeric value and shows an alert saying if the inserted value is odd or even. Use a function
expression to apply the value check.

### D) generateIP

An IP address identifies devices connected to a net. In IP address is composed by four numbers (between 0 an 255) divided
by points. An example is `192.165.10.240`. Write a program that asks the user a number `n`. The program generates and prints
on the console `n` IP addresses. Use a function expression `generateIP()`.

## Arrow functions

### E) myPow

Create a page that takes two integers `b, e`. The page must show an alert with the result of `b^e`. Create a function
`myPow()` in order to calculate the result.

### F) perfectNumbers

A number is perfect when the sum of its divisors (excluding n itself) is equal to the product of its divisors. For example 6 is a perfect number
because `3+2+1 = 3*2*1 = 6`. Write an arrow function `isPerfect()` that takes a number `n>0` and shows an alert saying
if n is perfect or not perfect.