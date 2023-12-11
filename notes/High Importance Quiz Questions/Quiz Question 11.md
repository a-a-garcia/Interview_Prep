---
id: 87njxq8qrj8op5ly4m2mvop
title: Quiz Question 11
desc: ''
updated: 1702322575077
created: 1702322150159
---
**What's the difference between `.call` and `.apply`?**

**1st Blind Answer:** No clue. I just know that .call and .apply can be used to call a function and pass in an object as an argument (which becomes the value of `this`). 

**Correct Answer:**
Both `.call` and `.apply` are used to invoke functions.
* The first parameter will be used as the value of `this` within the function.
* However, `.call` takes in **comma-separated arguments** as the next arguments.
* `.apply` takes in **an array of arguments** as the next argument.
An easy way to remember this is C for `call`/comma-separated, and A for `apply`/array of arguments.

//Ex.
function add(a, b) {
  return a + b;
}

console.log(add.call(null, 1, 2)); // 3
console.log(add.apply(null, [1, 2])); // 3
