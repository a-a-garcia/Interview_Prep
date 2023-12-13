/**
 * @template T, U
 * @param { (value: T, index: number, array: Array<T>) => U } callbackFn
 * @param {any} [thisArg]
 * @return {Array<U>}
 */
Array.prototype.myMap = function (callbackFn, thisArg) {
    // Get the length of the array
    const length = this.length;
  
    // Create a new array to store the mapped values
    const array = new Array(length);
  
    // Iterate over each element of the array
    for (let i = 0; i < length; i++) {
      // Ignore index if value is not defined for index (i.e., sparse arrays)
      if (Object.hasOwn(this, i)) {
        // Call the provided callback function on the current element
        // and store the result in the new array
        array[i] = callbackFn.call(thisArg, this[i], i, this);
      }
    }
  
    // Return the new array with the mapped values
    return array;
  };

// A note on why we pass both thisArg and this on line 20 - 

// thisArg:

// thisArg allows you to explicitly set the this value inside the callback function. It's an optional argument, and if not provided, the default this value inside the callback function would be the same as the array itself.

// this:

// The original array is passed as an argument to the callback function. This is useful when the callback function needs access to the entire array, not just the current element and index. Including the entire array as an argument can be convenient in some scenarios.

// By having both options (thisArg and this), the implementation provides flexibility for scenarios where you want to control the context in which the callback function runs, while still allowing access to the entire array if necessary. In many cases, you might not need both, but having both options provides versatility in different use cases.

/////////////////////////////////////////////

// callbackFn: This is the callback function passed as the first argument to Array.prototype.myMap. It's the function you want to apply to each element of the array.

// .call(thisArg, this[i], i, this):

// thisArg: This is the value that will be set as the this value inside the callbackFn. It's the first argument passed to call.

// this[i]: This is the current element in the array at index i. It's the second argument passed to call. It becomes the first argument inside callbackFn.

// i: This is the current index in the array. It's the third argument passed to call. It becomes the second argument inside callbackFn.

// this: The original array. It's the fourth argument passed to call. It becomes the third argument inside callbackFn.

// So, effectively, when callbackFn.call(thisArg, this[i], i, this) is executed, it's as if you called callbackFn(this[i], i, this) directly, but with the added ability to specify the this value for the callback function.

// Why Use .call?
// Control over this: The use of .call allows you to explicitly set the this value inside the callback function. This is particularly useful when the callback function relies on a specific context.

// Consistency with Standard Callback Parameters: By passing the current element, index, and the entire array as arguments in a consistent order, it ensures that the callback function receives parameters in a way that mirrors the typical behavior of callback functions used with array methods like map.

// Flexibility: It provides flexibility for different use cases. For instance, you can pass an object as thisArg to manipulate the context in which the callback function runs.

// In summary, callbackFn.call(thisArg, this[i], i, this) is a mechanism to invoke the callback function with specific arguments and a specified this value, offering control and consistency in how the callback is applied to each element of the array.