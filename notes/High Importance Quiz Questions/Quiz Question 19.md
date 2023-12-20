---
id: epxvz83u5tklkvw81ae7l2y
title: Quiz Question 19
desc: ''
updated: 1703028238184
created: 1703027744446
---
**Explain `Function.prototype.bind`**

**Correct Answer**: "The `bind()` method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called"

`bind()` is most useful for binding the value of `this` in methods of classes that you want to pass into other function.

This was frequently done in React class component methods, which were not defined using arrow functions.

