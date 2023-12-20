console.log(foo); // undefined
var foo = 1;
console.log(foo); // 1

// Function declarations have the body hoisted while the function expressions (written in the form of variable declarations) only has the variable declaration hoisted.

// Function Declaration
console.log(foo); // [Function: foo]
foo(); // 'FOOOOO'
function foo() {
  console.log('FOOOOO');
}
console.log(foo); // [Function: foo]

// Function Expression
console.log(bar); // undefined
bar(); // Uncaught TypeError: bar is not a function
var bar = function () {
  console.log('BARRRR');
};
console.log(bar); // [Function: bar]

x; // undefined
y; // Reference error: y is not defined

var x = 'local';
let y = 'local';
