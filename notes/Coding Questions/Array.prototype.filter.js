// Array.prototype.filter creates a new array populated with the results of calling a provided function on every element in the calling array.

// Implement Array.prototype.filter. To avoid overwriting the actual Array.prototype.filter which is being used by the autograder, we shall instead implement it as Array.prototype.myFilter.

// Notes
// The filter callback function takes in more than just the element! There's also a second parameter for Array.prototype.filter as well. You are recommended to read the specification for Array.prototype.filter on MDN Docs before attempting.

// Solution:

// This question is pretty straightforward and just tests that you know how to access the array values within Array.prototype methods (using this).

// Initialize a new array to store the filtered results. As we loop through the array (via this), call the callback on each array element with the following parameters: element, index, array, and this. This be done by either using Function.prototype.call or Function.prototype.apply.

// If the callback evaluates to true, push the element into the results.

Array.prototype.myFilter = function (callbackFn, thisArg) {
    const length = this.length;
    const results = [];

    for (let k = 0; k < length; k++) {

        // Cache value in case the callback function modifies it - via multiplying, dividing, adding, etc.
        const kValue = this[k]

        if (
            // Ignore index if value is not defined for index (e.g. in sparse arrays) - meaning if there is an absence of a value in any index in the array.
            Object.hasOwn(this, k) &&

            callbackFn.call(thisArg, kValue, k, this)
            //thisArg - this is the value that will be set as the `this` value inside the `callbackFn`. In this case, its the array itself.
            //kValue - current value of the array element at index k.
            //k - index
            //this - the array itself.
            
        ) {
            results.push(kValue)
        }
    }
    console.log(results)
    return results
  };




// Tests 

// Edge Cases
// Passing the index and array to the filter callback.
// Invoking the filter callback with the correct this if thisArg is specified.
// Sparse arrays, e.g. [1, 2, , 4]. The empty values should be ignored while traversing the array.

[1, 2, 3, 4].myFilter((value) => value % 2 == 0); // [2, 4]

// Initial Setup:

// callbackFn is (value) => value % 2 == 0.
// thisArg is not provided, so the default this value inside callbackFn will be the array [1, 2, 3, 4].
// Loop Iteration 1 (k = 0):

// kValue is 1.
// The condition checks if Object.hasOwn([1, 2, 3, 4], 0) is true and if (value) => value % 2 == 0 returns true when called with arguments 1, 0, and [1, 2, 3, 4]. Both conditions fail, so nothing is pushed to results.
// Loop Iteration 2 (k = 1):

// kValue is 2.
// The condition checks if Object.hasOwn([1, 2, 3, 4], 1) is true and if (value) => value % 2 == 0 returns true when called with arguments 2, 1, and [1, 2, 3, 4]. Both conditions pass, so 2 is pushed to results.
// Loop Iteration 3 (k = 2):

// kValue is 3.
// The condition checks if Object.hasOwn([1, 2, 3, 4], 2) is true and if (value) => value % 2 == 0 returns true when called with arguments 3, 2, and [1, 2, 3, 4]. Both conditions fail, so nothing is pushed to results.
// Loop Iteration 4 (k = 3):

// kValue is 4.
// The condition checks if Object.hasOwn([1, 2, 3, 4], 3) is true and if (value) => value % 2 == 0 returns true when called with arguments 4, 3, and [1, 2, 3, 4]. Both conditions pass, so 4 is pushed to results.
// Result:

// The function returns the results array: [2, 4].
// So, the result of [1, 2, 3, 4].myFilter((value) => value % 2 == 0) is [2, 4], which contains the even numbers from the original array.


[1, 2, 3, 4].myFilter((value) => value < 3); // [1, 2]


// Notes
// Mutating the array in the filter callback is a bad idea and can cause unintended consequences. It is a positive signal to mention that mutation of the array within the callback is possible. The provided solution follows the TC39 specification for array mutation scenarios:

// The range of elements processed by filter is set before the first callback is called.
// Elements appended to the array after the call to filter begins will not be visited by the callback.
// If existing elements of the array are changed, their value as passed to the callback will be the value at the time filter visits them.
// Elements that are deleted after the call to filter begins and before being visited are not visited.
// The thisArg doesn't do anything if the callback is defined as an arrow function as arrow functions don't have their own bindings to this.