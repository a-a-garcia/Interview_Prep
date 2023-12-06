// Example of Prototypal Inerhitance

// Parent object constructor
function Animal(name) {
    this.name = name;
}

// Add a method to the parent object's prototype

Animal.prototype.makeSound = function() {
    console.log(`The ${this.constructor.name} makes a sound`);
}

// Child object constructor

function Dog(name) {
    Animal.call(this, name); // Call the parent constructor
}

// Set the child object's prototype to be the parent object's prototype

Object.setPrototypeOf(Dog.prototype, Animal.prototype);

// Add a method to the child object's prototype

Dog.prototype.bark = function() {
    console.log(`Woof!`);
};

// Create a new instance of Dog.

const Coco = new Dog('Coco');

// call methods on the child object.
console.log(Coco.name);
Coco.makeSound();
Coco.bark();

//NOTE:

// `.makeSound()` is not defined on `Dog`, so the engine goes up the prototype chain, and finds `.makeSound()` off the inherited `Animal`.

// Using `object.create` to build the inerhitance chain is not recommended. Use `Object.setPrototypeOf` instead.