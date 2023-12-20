---
id: jtoe1kpuyuvic89uerimzgw
title: Quiz Question 20
desc: ''
updated: 1703029493041
created: 1703029051928
---
**Explain "hoisting"**

**Correct Answer**: Hoisting is a term used to explain the behavior of variable declarations in your code. Variables declared or initialized with the `var` keyword will have their declaration "moved" up to the top of their module/function-level scope, which we refer to as hoisting. However, only the declaration is hoisted. The assignment (if there is one), will stay where it is.

Not that the declaration is not actually moved - the JS engine parses the declarations during compilation and becomes aware of declarations and their scopes. It just is easier to understand this behavior by visualizing the declarations as being hoisted to the top of their scope.

Variables declared via let and const are hoisted as well. However, unlike var and function, they are not initialized and accessing them before the declaration will result in a ReferenceError exception. The variable is in a "temporal dead zone" from the start of the block until the declaration is processed.