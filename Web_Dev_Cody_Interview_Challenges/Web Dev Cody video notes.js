// https://www.youtube.com/watch?v=AHbAAnt9qsY

//JS QUESTIONS

// JS HOISTING

// you can call a function before it's defined. JS engine moves the function definition to the top at runtime
doStuff()

function doStuff() {
    console.log("hello")
}

// JS CLOSURE
// you can create a function that scopes a function so you can scope some private variable(s) inside of the function

function makeCounter() {
    let count = 0;

    return function() { //this function has access to the scope above it - parent scope. we create a closure here.
        count++
        return count
    }
}

const myCounter = makeCounter();
myCounter();
myCounter();
myCounter();
myCounter();
console.log(myCounter())
//will print out 5

// VAR, LET, CONST
var name = "bob";
let lastName = "sally";
const age = 20;

//if you use var, var will be hoisted from 40 to 38
function doStuff2() {
    //var count
    for (let i = 0; i < 10; i++) {
        // let count = i; this won't work. it'll crash. line 43 doesn't have access to a let variable - block scoped.
        var count = i;
    }
    console.log(count)
}
doStuff2();

//DATA TYPES, DIFFERENCES, EXPLANATIONS
// primatives - number, string, boolean, null, undefined
// data structures - objects, arrays

//js AbortController
// something you can use when you're making an XHR request from your frontend.
// gives you the ability to cancel that request.
// useful if something in your front end ui is taking too long (15sec for ex) to cancel that request.

//this explanation
// used largely with classes.
// refers to the executional context of the thing you're calling

const obj = {
    name: "bob",
    age: 10,
    birthday() {
        this.age++
    }
}

const f = obj.birthday;

f()
obj.birthday();
console.log(obj.age);

//`this` is going to set based on how obj was called. look to the left of the period.
//if you do f(), it will print out 10, not 11 because it doesn't have access to the this context inside of the obj. it will try to increment the global variable of 'age' which if it doesn't exist will give NaN or undefined if you console.log global.age

//arrow function
const obj2 = {
    name: "bob",
    age: 10,
    birthday() {
        // setTimeout(function () {
        //     console.log(this)
        //     this.age++;
        // }, 500)
        setTimeout(() => {
            console.log(this)
            this.age++;
        }, 500)
    }
}

obj2.birthday();
//`this` will not be the object, it will be the timeout function's properties. 
//but, if you make it a arrow function, it will have access to calling the object's age and incrementing it. `this` refers to the object now. arrow functions do not create their own this, they inherit it from the enclosing lexical scope.

//PROMISES

//a promise is a way to invoke asynchronous code.
//useful for chaining what we want to do after that code is finished executing.
//ie we need to request the back end from the front end, once that code finishes we need to run some new code

const p = new Promise((resolve, reject) => {
    //run asynch code
    let someError = false;
    if (someError) {
        return reject(new Error("error"))
    }
    resolve('hello')
})

p
    .then(() => {
        //if successful, run this
    })
    .then(() => {
        //you can chain here
    })
    .catch((err) => {
        //do error handling.
    })
    .then((err) => {
        //you can even chain a .this after a .catch
    })
    .finally((results) => {
        //will always run after the .catch(s) and .then(s) run.
    })

//ASYNC AWAIT
//avoids excessive chaining, cleaner, easier to read, more sequential
//syntactic sugar from promises.

async function main() {
    try {
        const results = await p;
    } catch(err) {
        //do error handling.
    } finally {
        //will always run after the .catch(s) and .then(s) run.
    }
}

//HIGH ORDER FUNCTION
// a function that returns a new function, similar to closure explanation.
//JS SCOPE
// each inner function has access to the scope above.

function makeCounter2() {
    return () => {
        return () => {
            return () => {

            }
        }
    }
}

//CLASS?
//A blueprint for creating objects.

class Person{
    #name; //# makes them private?
    #age;
    hobby;

    constructor() {
        this.name = 'bob';
        this.age = 10;
        this.hobby = 'golfing';
    }

    jump() {

    }

    duck() {

    }
}

//OBJECT?
//an object is what actually has the data
const bob = new Person();
console.log(bob)

//TYPESCRIPT?
//gives type safety so you can intellisense when you're doing things wrong.
//gives you new syntax for verifying when you pass properties and objects around to different functions are correct
function doStuff3(name: string, age: number): number[] {

}

doStuff()

/////////////////////////////////////////////////////


//WEB DEV QUESTIONS

//HTTP meaning?
//Hyper Text Transport Protocol
//a protocol for communicating with servers. You have certain methods you can attach to headers.

//REST API?
//A server that's hosting some code that allows you to interact with it. Listens for what method you're using and what URL you're hitting. Takes the payload you're sending, sends you back a response, response headers.
//A RESTful API has a convention for inserting data you do a POST request to a certain endpoint.
//IE https://myAPI.com

//you do these type of requests at new users.
//POST@/users - {}
//GET@/users - []
//update user
//PUT@/users/:userID - {}
//DELETE@/userse/:userID 

//CACHE?
//Caching is the mechanism for taking data that's accessed a lot by different users and storing it someplace so server can respond faster.
//different kinds of caching - caching on CPU, caching on web server, caching on browser.

//LOCAL CACHE?
//When your browser makes a response to a page, depending on the headers, it may take that page and cache it.
//The next time you visit that page, it will load a previously viewed page from your computer instead of making a server request. Makes loading faster.

//COOKIES?
//when your browser makes a request to your server. You can include a cookies header that has various information attached to it.
//typically, authentication sessionID or session tokens are put on a cookie.
//Allows us to easily know what user is making what request(s).

//QUERY METHODS?
//ex https://google.com/search?f=javascript
//query strings - f=javascript 
//looks for a key called 'f' - and then find a value 'javascript' and use that information to query its dbs to give you info you're looking for.
{
    search: "javascript"
}

/////////////////////////////////////////////////////////////////

// REACT RELATED 
// STATE?

//you need a way to keep track of what user has done. typing, clicking, etc.
//allows us to run validation against the current state of the app and show alerts by setting other state variables.
//UI is bound to state, can dynamically change how visual are on the app

const [name, setName] = useState('bob');

//isolated state that lives on a component level.

//MOBX - external state management library. 
// Allows state to be pulled out to a higher level. similar to use Context.

//LIFECYCLE METHODS AND HOOKS
//components are first mounted,
useEffect(() => {
    console.log('we are first mounted')
    // if you have some HTTP request, smart to clean it up when you leave that page.
    return () => {
        //then unmounted (navigating away from a page)
        console.log("clean up");
    }
}, [])

//re-rendering? basically when state changes in the component or any of that component's parent. that parent and children will re-render

//useMemo.. useCallback.. useContext.. more hooks.

//REACT PORTAL?
// you can have your modal utilize react outside of the app render using react portals.

<html>
    <div id="app"></div>
    <div id="modal"></div>
</html>

react.render('#app')

//VIRTUAL DOM?

<html>
    <body>
        <div></div>
        <div></div>
        <div></div>
        <div>bob</div>
    </body>
</html>

//React has a copy of the dom as it exists. When things are re-computerd, it updates the virual dom. at some point, it will compare the virtual dom to real dom and apply the changes. Managing and manipulating the real dom is computational expensive.

//REACT HIGHER ORDER COMPONENTS?
//similar to vanilla JS high order functions. components that return other components. Not very commonly used...

function Component(a, b, c) {
    return function OtherComponent() {
        return <div>
            <div>{a}</div>
        </div>
    }
}

class Component{

    constructor() {
        this.state = {
            
        }
    }

    onMounted() {

    }

    onUnMounted() {

    }

    onUpdate() {

    }

    render() {

    }
}

//CLASS COMPONENT VS FUNCTIONAL COMPONENTS
//you should pretty much always use functional components in this day and age to have access to hooks.

//class components.. ES6 classes? performance?