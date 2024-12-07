# Exercises 03.4 - String

>[!NOTE]
>To start a js file on your terminal you need to install nodeJS and execute the following command `node filename.js`

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