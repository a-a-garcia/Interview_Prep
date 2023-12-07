---
id: cgqtmvtd5j4fnuvavnzwquy
title: Quiz Question 5
desc: ''
updated: 1701908656959
created: 1701908656959
---
**#5 What are the difference between variables created using `let`, `var` or `const`?**

**1st Blind Answer:**

In JavaScript, variables created using `let` are allowed to be reassigned at anytime. Variables using `const` cannot be reassigned. `var` has similar behavior to `let`, with some scoping considerations...

**Correct Answer**:

Variables declared using the `var` keyword are scoped to the function in which they are created (similarly to how the definition of `this` in an arrow function is received by the surrounding scope in which it's created), or if create outside of any function, to the global object (`window`).

`let` and `const` are __block scoped__, meaning they are only accessible within the nearest set of curly braces (function, if-else block, or for loop).

* `var` allows variables to be hoisted, meaning they can be referenced in code before they are declared. `let` and `const` will not allow this, instead throwing an error.

* Redeclaring a variable with `var` will not throw an error, but `let` and `const` will. Meaning, you can't do let foo = 'foo' then later on do let = 'bar'. But you can do that with var.

* `let` allows reassignment, `const` doesn't.

* Using `var` is not recommended. If working with older browsers, use a transpiler to compile your code to older syntax.

