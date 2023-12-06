// Before the optional chaining operator (?.) existed, it was sometimes troublesome to access deeply-nested properties in huge JavaScript objects when some of the intermediate properties might not be present.

// const john = {
//   profile: {
//     name: { firstName: 'John', lastName: 'Doe' },
//     age: 20,
//     gender: 'Male',
//   },
// };

// const jane = {
//   profile: {
//     age: 19,
//     gender: 'Female',
//   },
// };

// function getFirstName(user) {
//   return user.profile.name.firstName;
// }

// Doing getFirstName(john) works but getFirstName(jane) will error because the name property doesn't exist for jane.profile.

//Lodash's `_.get` method was created as a solution for such use cases.

//Create your own version of a get function. 

// The function gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place. The function signature is as such:

// get(object, path, [defaultValue]);

// object: The object to query.
// path: The path of the property to get. It can be a string with . as the separator between fields, or an array of path strings.
// defaultValue: Optional parameter. The value returned if the resolved value is undefined.

//tests 

const john = {
  profile: {
    name: { firstName: 'John', lastName: 'Doe' },
    age: 20,
    gender: 'Male',
  },
};

const get = (objectParam, pathParam, defaultValue) => {
  //start by splitting the path up by the delimiter, which is a period.
  const path = Array.isArray(pathParam) ? pathParam : pathParam.split('.')

  //path becomes something like ['profile', 'name', 'firstName], unless it's already an array.

  //Now we have to loop / recursively traverse the object given each token in the path.

  //loop should stop when a `null`-ish value is encountered.

  //Also, Array index accessing doesn't require special handling. It can be treated like accessing string-based fields on objects. IE 

    // const arr = [10, 20, 30];
    // arr[1] === 20; // true
    // arr['1'] === 20; // true
    
  let index = 0;
  let length = path.length;
  let object = objectParam;


  while (object != null && index < length) {
    object = object[String(path[index])]
    index++;
  }
  //1st iteration: object = john[`profile`]
  //2nd iteration: object = john[`name`]
  //2nd iteration: object = john[`firstName`]

  // if index && index===length is true, result becomes object, else undefined
  const result = index && index === length ? object : undefined;

  // is the result not equal to undefined? if so, return the result, otherwise, return defaultValue
  return result !== undefined ? result : defaultValue;

}



console.log(get(john, 'profile.name.firstName')); // 'John'
get(john, 'profile.gender'); // 'Male'
// get(jane, 'profile.name.firstName'); // undefined