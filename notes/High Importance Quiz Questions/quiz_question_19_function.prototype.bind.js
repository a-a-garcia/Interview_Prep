const john = {
    age: 42,
    getAge: function () {
      return this.age;
    },
  };
  
  console.log(john.getAge()); // 42
  
  const unboundGetAge = john.getAge;
  console.log(unboundGetAge()); // undefined
  
  const boundGetAge = john.getAge.bind(john);
  console.log(boundGetAge()); // 42
  
  const mary = { age: 21 };
  const boundGetAgeMary = john.getAge.bind(mary);
  console.log(boundGetAgeMary()); // 21


//   In the example above, when the getAge method is called without a calling object (as unboundGetAge), the value is undefined because the value of `this` within getAge() becomes the global object. boundGetAge() has its this bound to john, hence it is able to obtain the age of john.

//   We can even use getAge on another object which is not john! boundGetAgeMary returns the age of mary.