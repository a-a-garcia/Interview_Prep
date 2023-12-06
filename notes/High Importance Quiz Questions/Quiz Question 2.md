---
id: m6omg7qmbmc7islt677lyji
title: Quiz Question 2
desc: ''
updated: 1701802114110
created: 1701802110098
---
***#2 Explain how prototypal inheritance works.***

__1st BLIND ANSWER:__ No idea...

__CORRECT ANSWER:__ 
All JavaScript objects have a "`__proto__`" property (with the exception of objects created with "`Object.create(null)`" )

When a property is accessed on an object, and if the property is not found on that object, the JS engine looks at the object's "`__proto__`", and the "`__proto__`"'s "`__proto__`", and so on, until it finds the property defined on one of the "`__proto__`"'s or until it reaches the end of the prototype chain.

This behavior simulates classical inheritance, but it's really more of delegation than inheritance. (see here for more info: https://davidwalsh.name/javascript-objects)

Also check the JS file named "prototypal_inheritance.js" for an example.

****

__MORE ABOUT PROTOTYPAL INHERITANCE VS CLASSICAL INHERITANCE__:

Similarities:
* Object Creation:

Both prototypal and classical inheritance are mechanisms for creating new objects.
* Encapsulation:

Both mechanisms provide a way to encapsulate properties and methods within objects, allowing for code organization and reusability.

Differences:
* Syntax:

**Prototypal Inheritance:** In JavaScript, objects inherit directly from other objects. You set up inheritance by linking one object to ans protother through itotype chain.

// Prototypal Inheritance
const parent = { name: 'Parent' };
const child = Object.create(parent);

**Classical Inheritance:** Classical inheritance is typically associated with class-based languages, where classes are used to create objects, and inheritance is achieved through class definitions.


// Classical Inheritance (ES6 and later)
class Parent {
  constructor() {
    this.name = 'Parent';
  }
}

class Child extends Parent {}

* Base Object:

**Prototypal Inheritance:** Objects inherit directly from other objects. There is no concept of a class; instead, objects serve as prototypes.

**Classical Inheritance:** In classical inheritance, classes act as blueprints for creating objects. Objects are instances of classes, and inheritance occurs through class hierarchies.

* Dynamic Nature:

**Prototypal Inheritance:** It's more dynamic. You can add or modify properties and methods on the prototype chain during runtime.

**Classical Inheritance:** Classes are typically more static, especially in classical languages. The structure is defined at compile-time, and it's not as flexible at runtime.

* Constructor Function:

**Prototypal Inheritance:** Constructor functions are used to create objects, and you can manually set the prototype of an object using the Object.create() method.

**Classical Inheritance:** Classes encapsulate both the constructor and the prototype, providing a more unified syntax for defining and initializing objects.

Use Cases:

**Prototypal Inheritance:**

* Flexible and dynamic.
* Often used in functional programming and object composition.
* Suitable for scenarios where objects need to inherit directly from other objects.

**Classical Inheritance:**

* More structured and familiar for developers coming from class-based languages.
* Introduced in ECMAScript 2015 (ES6) and later versions.
* Provides a class-based syntax with the class keyword.

In modern JavaScript, both prototypal and classical inheritance patterns are used, and the choice between them often depends on the developer's preference, the nature of the project, and the coding paradigm they are comfortable with. It's worth noting that even when using classes in JavaScript, they are still under the hood implemented using prototypes.