# Introduction to JavaScript
* basic syntax
```js
console.log("hello world")
console.log(11)
console.log(true)
```

### commends :
* single line : any wtitten in `//  ` <-- can be do by shortcut key in vs : `control + /`
```mjs
// this is comment
```

* muntiple line : any wtitten in  `/*  */` <-- can be do by shortcut key in vs :  `shift +  atl + A`
```mjs
// this is comment
```

### Variables : A container to store value
* String : 
   eg: `let a = "A" `<br>` let a = "a" `<br>` let a = "Any Words"`
```mjs
// implementation of code
let name = "oshan"   
let ward  = 14       
let address = "kathmandu"
let hascar = false

//calling variable
console.log(name,ward,address,hascar)

//changing variable
name = "Bajracharya"
console.log(name,ward,address,hascar)


const country = "nepal"
console.log(country)
// country = "usa"  throw error
```
###  OPERATORS  :
1) Arithomatic operator   +,-,/,*,%
2) Assignment operator    =,=-,=+
3) Comparsion operator    <,>,<=,>=
4) Logical operator       ! , ||  , &&

```mjs

// Arithomatic operator
console.log(1 + 1)
console.log(1 - 1)
console.log(1 * 1)
console.log(1 / 1)
console.log(1 % 1)


// Assignment operator
let a = 10   //it assign 10 to a variable

// Comparsion operator
console.log(3 > 2)
console.log(3 < 2)
console.log(3 >= 3)
console.log(3 === 3)   //3 IS EQUAL TO 3
console.log(3 !== 3)    //3 IS NOT EQUAL TO 3  


// Logical operator
console.log(!true)
console.log(!false)

// && -> output is false if one input is false 
console.log(true && true&& false && true)
console.log(true && true&& true && true)


// || -> output is true if one input is true 
console.log(false || false || false || false)
console.log(false || false || true || false)

```