---
id: 0dp5c50npu7gfzh0w2ojdch
title: Quiz Question 9
desc: ''
updated: 1702152421224
created: 1702152098669
---
**#9 What is the difference between `==` and `===` ?**

__1st Blind Answer__: 

`==` does not check for data type. So 1 == '1' will be truthy.

`===` DOES check for data type. 1 === '1' will be falsy.

**Correct Answer:**

`==` is the **abstract equality operator**, while `===` is the **strict equality operator.** 

The `==` operator will compare for equality after doing any necessary type conversions.

The `===` operator will NOT do type conversions, so if two values are not the same type, `===` will return false.

When using `==` some funky things can happen:

* 1 == '1'; //true
* 1 == [1]; //true
* 1 == true; //true
* 0 == ''; //true
* 0 == '0'; //true
* 0 == false; //true

As a general rule of thumb, **never use the `==` operator,** except for convenienve when comparing against `null` or `undefined`, where `a == null` will return `true` if `a` is `null` or `undefined`.

var a = null;
console.log(a == null); //true
console.log(a == undefined); //true