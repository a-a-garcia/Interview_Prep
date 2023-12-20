// Array.prototype.reduce is a way of "reducing" elements in an array by calling a "reducer" callback function on each element of the array in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// Implement Array.prototype.reduce. To avoid overwriting the actual Array.prototype.reduce which is being used by the autograder, we shall instead implement it as Array.prototype.myReduce.

/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {Array<U>}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
    // Check if initialValue is not provided
    const noInitialValue = initialValue === undefined;

    // Get the length of the array
    const len = this.length;

    // If no initialValue and the array is empty, throw an error
    if (noInitialValue && len === 0) {
        throw new TypeError(`Reduce of empty array with no initial value`);
    }

    // Set the initial accumulator value
    let acc = noInitialValue ? this[0] : initialValue;

    // Set the starting index based on whether initialValue is provided
    let startingIndex = noInitialValue ? 1 : 0;

    // Loop through the array starting from the appropriate index
    for (let i = startingIndex; i < len; i++) {
        // Check if the property at index i exists in the array
        if (Object.hasOwnProperty.call(this, i)) {
            // Call the callback function with accumulator, current value, index, and the array itself
            acc = callbackFn(acc, this[i], i, this);
        }
    }

    // Return the final accumulator value
    return acc;
  };

console.log([1,2,3,4].myReduce((acc, current) => acc + current));


//SOLUTION

// This question might seem easy on first glance, but the nuances make the question trickier than it seems on the surface. Knowing the nuances differentiates senior candidates and gives you bonus points. Are you aware that:

// The reducer callback is passed the currentIndex and array as the third and fourth argument respectively?
// If there is no initial value supplied to the reduce function, the array element at index 0 is used and the iteration starts from the next element (index 1 instead of index 0).

//The rest of the implementation is straightforward with these nuances taken into account. As we loop through the array (via this), call the callback on each array element with the following parameters: acc, element, index, and this. The returned value will become the new acc to be passed to the next call of the callbackFn.

// Edge Cases
// Empty array, with and without the initialValue argument.
// Single-value array, with and without the initialValue argument.
// Passing the index and array to the reducer callback.
// Sparse arrays, e.g. [1, 2, , 4]. The empty values should be ignored while traversing the array.

// Notes
// Mutating the array in the reduce callback is a bad idea and can cause unintended consequences. It is a positive signal to mention that mutation of the array within the callback is possible. The provided solution follows the TC39 specification for array mutation scenarios:

// The range of elements processed by reduce is set before the first callback is called.
// Elements appended to the array after the call to reduce begins will not be visited by the callback.
// If existing elements of the array are changed, their value as passed to the callback will be the value at the time reduce visits them.
// Elements that are deleted after the call to reduce begins and before being visited are not visited.

//NOTE ABOUT the `Object` CONSTRUCTOR

// The Object constructor in JavaScript is at the top of the prototype chain, meaning all objects, including arrays, inherit properties and methods from it. Therefore, when you're dealing with an array, you can use methods from the Object prototype, such as Object.hasOwn, because arrays inherit from Object.