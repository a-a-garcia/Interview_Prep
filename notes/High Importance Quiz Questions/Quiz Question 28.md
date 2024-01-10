---
id: c74fo83klagf330rgxrtalp
title: Quiz Question 28
desc: ''
updated: 1704839069312
created: 1704837441451
---
**What language constructions do you use for iterating over object properties and array items?**

**OBJECTS**
___
* **`for in` statement**
    
    for (const property in obj) {
        console.log(property)
    }

    The `for...in` statement iterates over all the objects **enumerable** properties (including inherited enumerable properties). Hence, most of the time, you should check whether the property exists directly on the object via `Object.hasOwn(object, property)` before using it.

    for (const property in obj) {
        if (Object.hasOwn(obj, property)) {
            console.log(property)
        }
    }

    Note that `obj.hasOwnProperty()` (vs `obj.hasOwn`) isn't recommended because it doesn't work for objects created using `Object.create(null)`. You can also use `Object.prototype.hasOwnProperty.call(object,key)`...
    
* **`Object.keys()`**
    
    Object.keys(obj).forEach((property) => {
        console.log(property);
    })

    `Object.keys()` is a static method that will return an array of all the enumerable property names of the object that you pass it. Since `Object.keys()` returns an array, you can also use the array iteration appraoches listed below to iterate through it.

* **`Object.values()`**
    Similar to `Object.keys()`, except you can access all the property values of the object you pass it.

* **`Object.getOwnPropertyNames()`**

    Object.getOwnPropertyNames(obj).forEach((property) => {
        console.log(property);
    })

    `Object.getOwnPropertyNames` is a static method that will list all enumerable and non-enumerable properties that you pass it. It also returns an array so you can iterate through it with array methods

___

**ARRAYS**

* `for` loop - self explanatory

* `Array.prototype.forEach()`
    Can be more convenient at times, if you don't need to use the index or i and all you need is the individual array elements. However, you can't stop iteration half way and the provided function will be executed on the elements once. A `for` or `for..of` is more relevant if you need finer control over iteration.

* `for...of`
    for (let element of arr) {
        console.log(element);
    }
    
    ES2015 syntax ~ allows you to loop over objects that conform to the iterable protocol, such as `String`, `Array`, `Map`, `Set`, etc. It combines the advantages of the `for` loop and the `forEach()` method. The advantage of the `for` loop, is that you can break from it, and the advantage of `forEach` is that it's more concise than `for`. 

    Most of the time, `.forEach` method is useful enough but it depends. You can use `for` loops when you need to prematurely terminate the loop in tandem with `break`. But now you can do that with `for...of`. Use `for` loops when you need more flexibility, such as incrementing the iterator more than once per loop.

    Also, when using the `for...of` statement, if you need to access both the index and value of each array element, you can do so with ES2015 `Array.prototype.entries()`.

    const arr = ['a','b','c'];

    for (let [index, elem] of arr.entries()) {
        console.log(index, `: `, elem)
    }