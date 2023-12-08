// Implement a function uniqueArray that takes in an array and returns a duplicate-free version of the array where only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array.


const uniqueArray = (arr) => {
    //use an object/dictionary to keep track of elements encountered.

    let encounteredItems = new Set;
    
    let result = []
    //traditional loop

    for (let i = 0; i < arr.length; i++) {
        if (encounteredItems.has(arr[i])) {
            continue;
        } else {
            encounteredItems.add(arr[i])
            result.push(arr[i])
        }
    }
    console.log(result)
    return result
}


// Test
// uniqueArray([1, 2, 3]); // [1, 2, 3]
// uniqueArray([1, 1, 2]); // [1, 2]
uniqueArray([2, 1, 2]); // [2, 1]

//Solution

// This question is a simple question and is expected to be used as a warm up question in interviews. However, there are some traps in the question which we will go through.

// Clarification Questions

// How do we compare equality for non-primitive values like arrays and objects?
    // For the purpose of this question in an interview setting, we can use === for comparison. Lodash's uniq function uses SameValueZero which is much more sophisticated.

// Will the array only contain values of the same type?
    // We cannot make that assumption.


//Brute Force
// We can use a new array to store the result. By iterating through the input array, we check if the current element is in the result array using Array.prototype.includes() and add it into the results array if it doesn't exist.

// However, this solution is O(n2) because Array.prototype.includes() is an O(n) operation and we do it once for every element in the input array.

// export default function uniqueArray(array) {
//     const result = [];
  
//     array.forEach((item) => {
//       if (!result.includes(item)) {
//         result.push(item);
//       }
//     });
  
//     return result;
//   }

//More efficient
// Using Set to track existing elements
// As seen above, Array.prototype.includes() is not efficient. We can check for existence of an element in O(1) time with the right data structure. Sets are the perfect data structure to achieve this. 
//Instead of using Array.prototype.includes(), we can use Set.prototype.has() to query in O(1) time for the existence of an element. The structure is similar to the brute force approach above. The time complexity of this solution is O(n).

// export default function uniqueArray(array) {
//     const result = [];
//     const seen = new Set();
  
//     array.forEach((item) => {
//       if (!seen.has(item)) {
//         result.push(item);
//         seen.add(item);
//       }
//     });
  
//     return result;
//   }

//most efficient - one liner
//Converting to Set then back
//The simplest one-liner answer is to convert the array into a Set, then back into an array. If your interviewer does not allow you to do this elegant one-liner, you can use the previous approach. The time complexity of this solution is also O(n).

// export default function uniqueArray(array) {
//     return Array.from(new Set(array));
//   }

//NOTE
// An Object cannot be used as a replacement for Set for tracking seen values because object keys are strings and the ability to distinguish between types vs their stringified versions will be lost (e.g. 2 vs '2' and true vs 'true'). We have a test to check for this.