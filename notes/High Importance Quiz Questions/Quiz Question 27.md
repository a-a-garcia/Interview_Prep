---
id: ue1108uwpzskdwjlkx1su28
title: Quiz Question 27
desc: ''
updated: 1704837378864
created: 1704833398171
---
**What is event loop?**

The event loop is a single-threaded loop that monitors the call stack, and checks if there is any work to be done in the task queue.

If the call stack is empty, and there are callback functions in the task queue, a function is dequeued and pushed onto the call stack to be executed.

Two resources:

https://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html

https://www.youtube.com/watch?v=cCOL7MC4Pl0

Notes from videos -

JavaScript is a **single-threaded, nonblocking, asynchronous, concurrent language**.

It has a **1) call stack 2) event loop 3) callback queue 4) some other APIS...**

Let's break that down!

JavaScript runtime (like **V8, the JS runtime inside of Chrome**) consists of a heap (where memory allocation happens) and callstack (where stack frames are)..

Surprisingly, V8 doesn't include some things like setTimeout.. these are pvoided by Web APIS - DOM, ajax, setTimout, etc..

___

The call stack. one thread == one call stack == one thing at a time.

The call stack is a data structure which recods where in the program we are. If we enter a function, we put something in the stack, if we return something from a function, we pop off the stack. Call stack is LIFO.

main() is often when gets put onto a stack first.

Stack overflow:
function foo() {
    return foo();
}
foo();

___

Blocking - code that is slow. Console.log is not slow. image processing is slow, network requests are slow.

What happens when things are slow?

If the call stack has things on it, things that take a long time - IE network requests (var foo = $.getSync('//foo.com)), it must complete the function before the browser can do anything else. BLOCKING!

The simplest solution - asynchronous callbacks

In the call stack, asynchronous callbacks are put onto the call stack.. but then disappear and reappear later?

___

Concurrency and the event loop - one thing at a time.. except not really.

When you call something asynchronous like setTimeout(), it's added to the stack, popped off, then the it's added to another "stack" - webAPIs, where the timer kicks off and runs.

However, when it's finished, Web APIs can't just toss it back onto the call stack or else your code might display/execute randomly.

So when any of the web API tasks are done, it pushes the callback onto another stack-like data structure - something called the "task queue".

Then we get to the event loop. It has one very simple job: 
**Look at the call stack and look at the task queue. If the call stack is empty, take the first thing from the task queue, and push it onto the call stack.**

Given that info, even if you do setTimeout with a wait of 0 seconds, and you have something like 

Console.log('Hi')
setTimeout(function cb() {
    console.log('there')
}, 0)
console.log('JSConfEU')

'there' will still log last, because nothing in the task queue will be put back onto the call stack until the call stack is clear.

__

setTimeout isn't a set time to execution - it's a minimum time to execution. Just like setTimeout(...0) doesn't run immediately.

___

How does all of this work with rendering? (If rendering is blocked, you can't click anything or interact with the browser at all)

The browser is constrained by what you're doing in JS. the browser wants to repaint everything every 16.6 ms.

It can't do a re-render if theres items in the call stack, but the render is given a higher priority than your callback(s).

Rendering works well with asynchronous because the browser is given a chance to render between task queue and call stack interactions.
