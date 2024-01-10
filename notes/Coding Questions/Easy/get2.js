function get(objectParam, pathParam, defaultVal) {
    //path will be something like 'profile.name.firstName', so we need to split that string into an array so we can traverse it easier. (unless it's already an array)
    const path = Array.isArray(pathParam) ? pathParam : pathParam.split('.');
    
    //Then, we need to loop until we get to the end of that array we prev defined. Using a while loop here.
    // let index = 0;
    // let length = path.length
    // let object = objectParam;
    // while (object != null && index < length) {
    //     object = object[String(path[index])]
    //     index++;
    // }

    //for loop - still need to initialize a variable for the object. do not modify the parameter directly or you will violate the rule of immutability (functions should not modify the state of their input params)
    let object = objectParam;
    for (let index = 0; index < path.length && object != null; index++) {
        object = object[String(path[index])];
    }
    return object

    // define the result and return it. checks here are added to make sure we traversed the whole array (that index exists and that at the end of the while loop index is equal to the length of the array).
    // const result = index && index === length ? object : undefined
    // return result !== undefined ? result : defaultVal
}

const john = {
    profile: {
        name: { firstName: 'John', lastName: 'Doe'},
        age: 20,
        gender: 'Male'
    }
}

const testOneObj = {
    a: 1
}

const testTwoObj = {
    a: {
        b: 2
    },
    c: 1
}

console.log(get(john, 'profile.name'));
console.log(get(testTwoObj, 'a'))