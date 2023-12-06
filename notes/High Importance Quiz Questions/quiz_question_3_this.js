//examples of 'this'

//1. 'new' Keyword

//Constructor
function Person(name, age) {
    // 'this' refers to the newly created object
    this.name = name;
    this.age = age;

    //Add a method to the object
    this.sayHello = function() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old!");
    }
}

//create an instance of the Person object

const anthony = new Person("Anthony", 28); 

//Call the method on the newly created object

anthony.sayHello();

//2. 'call' and 'apply'

//Define a simple function
function greet(name) {
    console.log(`Hello, ${name}! My name is ${this.fullName}. `)
}

//Create an object with the 'fullName' property

const person = {
    fullName: `Anthony Garcia`
};

// Use `apply` to call the greet function. Doing this explicitly sets the value of `this` to the `person` object.

//the first argument (in this case, 'person') is the value to use as 'this' inside the greet function

//the second argument (in this case, ['Alice]' is an array of arguments to pass to the greet function).

greet.apply(person, ['Alice']);


//#3 Method invocation

//Object with a method

const john = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}, and my age is ${this.age}.`);
    }
};

//Call the greet method on the john object

//when we call john.greet(), `this` inside the `greet` method refers to the `john` object.
john.greet();

//4 free function invocation

//Global context

let globalVar = 'I am a global variable';

function greet() {
    console.log(`Hello! I am ${this.globalVar}`)
}

// in non-strict mode, `this` inside `greet` refers to the global object, which is `window` in the browser. This will work as expected if globalVar is declared with `var`.

//However, if globalVar is declared with `let` or `const` it will not be added to the global object, and `this.globalVar` will be undefined. Or, if we are in strict mode, `this` will be undefined.

greet();


//5. rule hierarchy determines the value of `this`.

//define a constructor
function example(name) {
    this.name = name;
}

//add a method to the prototype

example.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
}

//create an instance of the example object

const exampleInstance = new example('Anthony');

//create a standalone function that refers to the sayHello method

const standaloneFunction = exampleInstance.sayHello;

//use various techniques to invoke the standalone function

exampleInstance.sayHello(); // Rule 3: `this` is the object that the function is a property of. In this case, `this` is `exampleInstance`.

standaloneFunction() // Rule 4: free function invocation (non-strict mode). `this` is the global object, which is `window` in the browser. undefined in this case.

standaloneFunction.apply(exampleInstance); // Rule 2: `apply` is used to set `this, `this` is the first argument passed to `apply`, which is `exampleInstance`.

standaloneFunction.call(exampleInstance); // Rule 2: `call` is used to set `this`, `this` is the first argument passed to `call`, which is `exampleInstance`.

//In this case, the rule hierarchy is such that Rule 3 (method invocation) takes precedence over Rule 4 (free function invocation), and Rule 2 (apply/call) is also overridden by Rule 3. The result is that the sayHello method is the dominant rule, and this is consistently set to the exampleInstance object.

//hierarchy of rules, from least to most dominant:
// Rule 4: free function invocation
// Rule 2: (`apply`, `call`, `bind`)
// rule 3: method invocation
// Rule 1: `new` keyword

//6. Arrow functions

//Regular function expression

function regularFunction() {
    this.regularVar = 'I am a regular variable';

    return function() {
        console.log(`Regular Function: ${this.regularVar}`);
    }
}

//Arrow function expression

function arrowFunction() {
    this.arrowVar = 'I am an arrow variable';

    return () => {
        console.log(`Arrow Function: ${this.arrowVar}`);
    }
}

//creating instances

const regularInstance = regularFunction();
const arrowInstance = arrowFunction();

//Invoke functions

//The regular function inside `regularFunction` has its own `this`, and in non-strict mode, it would be `window`. (In strict mode, it would be undefined.). If the this.regularVar reference is not captured correctly, it will be undefined, but in this case, it will be the global variable.
regularInstance();

//The arrow function inside `arrowFunction` captures the `this` value from its surrounding scope (`arrowFunction`), so `this.arrowVar` will be defined.
arrowInstance();