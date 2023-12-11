---
id: we36tujwyu8itgpxynkjf0v
title: Quiz Question 10
desc: ''
updated: 1702320195737
created: 1702319489533
---
**#10 What's the difference between a variable that is: `null`, `undefined`, or undeclared?**

__1st Blind Answer__: 
* `null` : is developer defined. It signifies the developer is intentionally aware and communicating that the variable should have the absence of a value.

* `undefined` : signifies that a value is expected, but just is not known yet.

* undeclared : signifies a variable just doesn't exist / is known yet.

__Correct Answer__: 

* **Undeclared** variables are created when you assign a value to an identifier that is not previously created using `var`, `let`, or `const`. They are defined globally, ouside of the current scope. In strict mode, a '`ReferenceError`' will be thrown when you try to assign to an undeclared variable. They're bad, just like global variables are bad. AVOID THEM AT ALL COST! To check for them, wrap its usage in a `try`/`catch` block.

* **`undefined`** variables are variables that have been declared, but not assigned a value. It's of type `undefined`.  If a function doesn't return any value as the result of executing it is assigned to a variable, the variable also has the value of `undefined`. To check for it, comparing using the strict equality (`===`) operator or `typeof` which will give the '`undefined`' string. Note: you should not be using (`==`) to check, as it will also return `true` if the value is `null`.

* `null` variables are variables that have been explicitly assigned the `null` value. It represents the absence of value and is different from `undefined` in the sense that it hasn't been explicitly assigned. To check for `null`, simply compare using (`===`). Note: you should not be using (`==`) to check, as it will also return `true` if the value is `undefined`.

Never leave your variables undeclared or unassigned. **Explicitly assign `null` to them, if you don't intend to use them right away.** 

If you use some static analysis tooling in your workflow (ESLint, TypeScript Compiler), it will also usually be able to check that you are not referencing undeclared variables.