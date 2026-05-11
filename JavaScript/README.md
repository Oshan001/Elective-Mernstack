# Introduction to JavaScript

* basic syntax

```js
console.log("hello world")
console.log(11)
console.log(true)
```

---

## commends :

* single line : any written in `//`  
  shortcut key in VS Code: `ctrl + /`

```js
// this is comment
```

* multiple line : any written in `/*  */`  
  shortcut key in VS Code: `shift + alt + A`

```js
/*
this is comment
*/
```

---

## Variables : A container to store value

* String :  
  eg: `let a = "A"` , `let a = "a"` , `let a = "Any Words"`

```js
// implementation of code
let name = "oshan"
let ward  = 14
let address = "kathmandu"
let hascar = false

// calling variable
console.log(name, ward, address, hascar)

// changing variable
name = "Bajracharya"
console.log(name, ward, address, hascar)

const country = "nepal"
console.log(country)

// country = "usa"  throw error
```

---

## OPERATORS :

1) Arithmetic operator   +, -, /, *, %  
2) Assignment operator   =, -=, +=  
3) Comparison operator   <, >, <=, >=  
4) Logical operator      ! , || , &&  

```js
// Arithmetic operator
console.log(1 + 1)
console.log(1 - 1)
console.log(1 * 1)
console.log(1 / 1)
console.log(1 % 1)


// Assignment operator
let a = 10   // it assign 10 to a variable


// Comparison operator
console.log(3 > 2)
console.log(3 < 2)
console.log(3 >= 3)
console.log(3 === 3)   // 3 IS EQUAL TO 3
console.log(3 !== 3)   // 3 IS NOT EQUAL TO 3


// Logical operator
console.log(!true)
console.log(!false)

// && -> output is false if one input is false
console.log(true && true && false && true)
console.log(true && true && true && true)


// || -> output is true if one input is true
console.log(false || false || false || false)
console.log(false || false || true || false)
```

---

# JavaScript Conditional Statements

This project demonstrates how to use conditional statements in JavaScript using `if`, `else if`, and `else`.

---

## 1. Voting Eligibility Checker

### Code

```js
// can vote or not
let age = 28

if (age >= 18)
    console.log("you can vote")
else
    console.log("cant vote")
```

---

## 2. Gender Checker

### Code

```js
// to look gender
let gender = "other"

if (gender === "male")
    console.log("He")

else if (gender === "female")
    console.log("She")

else if (gender === "other")
    console.log("They")

else
    console.log("Invalid gender")
```