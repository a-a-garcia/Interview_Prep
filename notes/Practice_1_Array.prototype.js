// Array.prototype practice

Array.prototype.myFilter = function (callbackFn, thisArg) {
    const len = this.length;
    const result = [];

    for (let i = 0; i < len; i++) {
        const iValue = this[i]
        if (Object.hasOwn(this, i) && callbackFn.call(thisArg, iValue, i, this)) {
            result.push(this[i]);
        }
    }
    console.log(result)
    return result;
};

[1, 2, 3, 4].myFilter((value) => value % 2 == 0); // [2, 4]
[1, 2, 3, 4].myFilter((value) => value < 3); // [1, 2]



// Yes, you're correct. The order of arguments passed to the callback function in your Array.prototype.myFilter implementation follows the convention used by the native Array.prototype.filter method. The callback function receives the following arguments:

// Current Element (this[i] or value):

// The value of the current element in the array.
// Current Index (i):

// The index of the current element in the array.
// Array Object (this):

// The array on which the myFilter method was called.
// So, in the line callbackFn.call(thisArg, this[i], i, this), the order of arguments is:

// this[i] or value: The current element in the array.
// i: The index of the current element.
// this: The array itself.
// thisArg: The value passed as thisArg when calling myFilter.
// This order is consistent with how the callback function is typically used in array methods like filter. For example, if you have the following code:

// javascript
// Copy code
// const result = [1, 2, 3, 4].myFilter((value, index, array) => {
//     // Your filter condition here
//     return value % 2 === 0;
// }, someObject);
// Inside the callback function, value corresponds to the current element, index corresponds to the current index, array corresponds to the array being filtered, and someObject corresponds to thisArg. This convention makes it easier to work with array methods consistently.

// [1, 2, 3, 4].myFilter((value) => value % 2 == 0);
// Since there is no explicit thisArg passed when calling myFilter, the default behavior is that this within the callback function is the array itself ([1, 2, 3, 4]). In this case, the array is accessible as this[i] within the callback function.

// So, in the provided example:

// this (within the callback function) is [1, 2, 3, 4].
// value is the current element in the array during the iteration.
// The absence of thisArg in the myFilter call means that this within the callback function refers to the array being filtered. I appreciate your patience in seeking clarification, and I hope this clarifies the behavior of this in the context of the myFilter function.

Array.prototype.myMap = function(callbackFn, thisArg) {
    const len = this.length;
    const results = [];

    for (let i = 0; i < len; i++) {
        if (Object.hasOwn(this, i)) {
            results.push(callbackFn.call(thisArg, this[i], i, this));
        }
    }

    return results;
}

// [1, 2, 3, 4].myMap((i) => i);
const mappedResult = console.log([1, 2, 3, 4].myMap((value) => value));
// [1, 2, 3, 4].myMap((i) => i * i); 
