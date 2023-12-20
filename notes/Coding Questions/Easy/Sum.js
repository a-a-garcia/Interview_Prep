// Implement a sum function that accepts a number and allows for repeated calling with more numbers. Calling the function without an argument will sum up all the arguments thus far and return the total.

export default function sum(valueA) { //The outer function sum takes a single argument valueA.
    return function (valueB) { //The outer function returns an inner function (closure) that takes another argument valueB
        return valueB === undefined ? valueA : sum(valueA + valueB);
      };
        // Inside the inner function, there's a conditional statement:
        // If valueB is undefined, it means the inner function was called without an argument. In this case, the function returns the current total (valueA).
        // If valueB is provided, it recursively calls the sum function with the updated total (valueA + valueB). This allows chaining multiple calls to the sum function.
  }

//SOLUTION

// This question evaluates your understanding of closures and first-class functions - functions in JavaScript are variables that can be returned and passed into other functions as arguments.

// Clarification Questions

// What if we call sum() at the start without any arguments?
// We won't test this case. But we recommend throwing an Error.

// The `sum` function returns functions until it's called without any arguments, then it will return the total sum so far. Since we need to retain a running sum of the values added so far, we can use a variable for that. How do we achieve that without classes? The answer is closures.

// A closure is the combination of a function bundled together with references to its lexical environment (surrounding state). We can make use of closures to keep a reference to the running total.

// We declare an inner function that will be returned for subsequent calls to the function. That function will determine if there's a value being passed in. If there is, we add to the running total and return itself, so that subsequent calls can be made, otherwise we return the running total.

// We can check for the presence of an argument by using `argument === undefined`. Note that we shouldn't be using `==` here because `null == undefined` is true.

//CHAT GPT - 

// This function is implementing a concept known as "currying" to create a flexible sum function that allows repeated calling with more numbers. The goal is to sum up all the arguments passed to the function so far and return the total. 

