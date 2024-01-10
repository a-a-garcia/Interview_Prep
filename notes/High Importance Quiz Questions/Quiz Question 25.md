---
id: akeusucl5b7dgqvry566r77
title: Quiz Question 25
desc: ''
updated: 1704827767926
created: 1704827502804
---
**What are the pros and cons of using Promises instead of callbacks?**

**Answer:**

**PROS:**
    * Avoid callback hell, which can be unreadable.
    * Makes it easy to write sequential asynchronous code that is readable with `.then()`, and handle errors with `.catch()`.
    * Makes it easy to write parallel asynchronous code with `Promise.all()`.
    * With promises, these scenarios which are present in callbacks-only coding, will not happen:
        * Call the callback too early
        * Call the callback too late (or never)
        * Call the callback too few or too many times
        * Fail to pass along any necessary environment/parameters
        * Swallow any errors/exceptions that may happen
    
**Cons**:
    *Slightly more complex code (debatable).
    *In older browsers with no ES2015 support, you need to load a polyfill to use it.