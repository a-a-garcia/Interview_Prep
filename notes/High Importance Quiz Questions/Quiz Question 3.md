---
id: fqkaakh8fnsjsk0crzn0cn5
title: Quiz Question 3
desc: ''
updated: 1701809818859
created: 1701802216851
---
#3 ***Explain how `this` works in JavaScript***

**1st Blind Answer:** '`this`'  is a keyword most commonly used on an instance of a JavaScript class to access its properties or methods. It signifies the accessing of an object that has been instantiated.

**Correct Answer**: There's no simple explanation for '`this`'. 

The value of '`this`' truly depends on how the function is called.

* If the '`new`' keyword is used when calling the function, **'`this`' inside the function is a brand new object.**

* if '`apply`', '`call`', or '`bind`' are used to call/create a function, **'`this`' inside the function is the object that is passed in as the argument.**

* if a function is called as a method, such as '`obj.method()`' - **'`this`' is the object that the function is a property of**.

* if a function is invoked as a *free function invocation*, (meaning it was invoked without any of the conditions above), **'`this`' is a global object**. In a browser, that global object is the '`window`' object. If in strict mode, ('`use strict`'), '`this`' will be '`undefined`' instead of the global object.

* if multiple of the above rules apply, the rule that is higher wins and sets the value of '`this`'.

* If the function is an ES2015 arrow function, **it ignores all of the rules above and receives the '`this`' value of its surrounding scope at the time it is created.**

See examples of each in this.js.

***Give an example of one of the ways that working with '`this`' has changed in ES2015?***

ES2015 allows use to use arrow functions which use enclosing lexical scope (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_separate_this). This is usually convenient, but the caller can't control context via '`.call`' or '`.apply`'. Therefore, a library like jQuery will not properly bind '`this`' in your event handler functions. Keep this in mind for legacy code.

Arrow functions are particularly useful in scenarios where you want to preserve the this value from the surrounding context, making them well-suited for certain use cases, especially in callbacks or event handlers.