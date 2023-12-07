// let and const - variables are only accessible within the curly braces that they are defined.

function exampleFunction() {
    let outerVariable = 'I am outside the inner block';
  
    if (true) {
      let innerVariable = 'I am inside the inner block';
      console.log(innerVariable); // This will work
    }
  
    console.log(outerVariable); // This will work
    // console.log(innerVariable); // This will result in an error; innerVariable is not defined here
  }
  
  exampleFunction();

// var - variables are accessible function-wide

function exampleFunction() {
    var outerVariable = 'I am outside the inner block';
  
    if (true) {
      var innerVariable = 'I am inside the inner block';
      console.log(innerVariable); // This will work
    }
  
    console.log(outerVariable); // This will work
    console.log(innerVariable); // This will also work with var
  }
  
  exampleFunction();

//more examples...

function foo() {
    // All variables are accessible within functions.
    var bar = 'bar';
    let baz = 'baz';
    const qux = 'qux';
  
    console.log(bar); // bar
    console.log(baz); // baz
    console.log(qux); // qux
  }
  
  console.log(bar); // ReferenceError: bar is not defined
  console.log(baz); // ReferenceError: baz is not defined
  console.log(qux); // ReferenceError: qux is not defined


if (true) {
var bar = 'bar';
let baz = 'baz';
const qux = 'qux';
}

// var declared variables are accessible anywhere in the function scope.
console.log(bar); // bar
// let and const defined variables are not accessible outside of the block they were defined in.
console.log(baz); // ReferenceError: baz is not defined
console.log(qux); // ReferenceError: qux is not defined

////////////////////////////////////////

//var allows variables to be hoisted, meaning they can be referenced in code before they are declared. let and const will not allow this, instead throwing an error.
  
console.log(foo); // undefined

var foo = 'foo';

console.log(baz); // ReferenceError: can't access lexical declaration 'baz' before initialization

let baz = 'baz';

console.log(bar); // ReferenceError: can't access lexical declaration 'bar' before initialization

const bar = 'bar';

///////////////////////////////

//Redeclaring a variable with var will not throw an error, but let and const will.

var foo = 'foo';
var foo = 'bar';
console.log(foo); // "bar"

let baz = 'baz';
let baz = 'qux'; // Uncaught SyntaxError: Identifier 'baz' has already been declared

///////////////////////////////

//let and const differ in that let allows reassigning the variable's value while const does not.

// This is fine.
let foo = 'foo';
foo = 'bar';

// This causes an exception.
const baz = 'baz';
baz = 'qux'