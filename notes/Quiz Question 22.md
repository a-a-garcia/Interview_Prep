---
id: rr4o1pw67vjzv7pb3moae8r
title: Quiz Question 22
desc: ''
updated: 1703033006051
created: 1703032805145
---
**Explain the difference between synchronous and asynchronous functions**

**Correct Answer**:

Synchronous functions are blocking, while asynchronous functions are not. In synchronous functions, statements complement before the next statement is run. In this case, the program is evaluated exactly in the order of the statements and execution of the program is paused if one of the statements take a very long time.

Asynchronous functions usually accept a callback as a parameter, and execution continues on the next line immediately after the asynchronous function is invoked. The callback is only invoked when the asynchronous operation is complete and the call stack is empty. 

Heavy duty operations such as loading data from a web server or querying a DB should be done asynchronously so that the main thread can continue executing other operations instead of blocking until that long operation to complete (in the case of browsers, the UI will freeze.)