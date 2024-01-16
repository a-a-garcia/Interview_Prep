---
id: dyqnmzshdl378000u25dk7o
title: React Junior Developer Interview
desc: ""
updated: 1705430316404
created: 1705280600088
---

Notes from React Interview - https://www.youtube.com/watch?v=QjBAEPcNZHs

What is React and how can you best describe it?

"Opinion is divided in the React community?"

"It's a library to allow JavaScript to create UI interfaces'

---

What is JSX?

"the **TEMPLATING LANGUAGE **for React"

"You can insert JavaScript into HTML"

---

Benefits of JSX?

--interviewee had no answer--

My Answer: The most simplest example I can think of is the ease in which JSX allows information to be dynamically rendered. So for example if you have a web page and you want a user's name to be personally displayed to them, JSX can be crucial in dynamically rendering that. Also, because it's javascript you can do a multitude of things, you can set admin mode and render different available actions, different UI, with a boolean like if admin === true? etc. The sky is the limit because it's JavaScript, anything you want to conditionally render you could probably achieve it with JSX.

---

Interviewer: "When react was initially developed, there was no JSX"

"You would have a function for each tag... Code was uglier and you would get easily lost"

"All of the reactivity from react but you can work with it almost like HTML"

---

Can you explain what the virtual DOM is, and how react uses it?

My Answer: The concept of the virtual DOM is crucial to react and why it's so widely used. In React, a virtual dom is created and is a snapshot of the real DOM and how it currently exists, but it's separate from the "real" DOM. What makes React magical is that anytime a change is detected in the virual DOM (via events like onClick for example) the virtual DOM will be updated and React will know exactly where in the DOM it needs to update the "real" DOM. This is the magic of react. the browser doesn't need to repaint the entire page every time something changes

Interviewer:

"the virtual dom is the layer in between "

"efficient updates"

---

disadvantage of virtual DOM?

"performance disadvantages"

Interviewer:

"_EVERYTHING_ in react must go through the virtual dom, so there can be performance implications if you have computational heavy tasks on the front end (which, you never really should)."

"There are things called "signals" in react that allow you to bypas the virtual DOM and directly manipulate HTML and the DOM" - research this?

---

What is the difference between controlled and uncontrolled inputs?

Interviewer: "If I tell you that you have an input and you can either get the value by state or you can get the value directly from the HTML without state"

"controlled components - you are manipulating inputs with state, you have a piece of state that is updated from the input and that's how you change the value"

"uncontrolled you have no state. You get it from the ref of the input without state because inputs have a value"

"If you control them, you control the actual state."

---

Common hooks in react?

"useEffect() - great for fetching data"

"useMemo() - good for performance. **makes sure re-renders do not happen unneccessarily**"

ChatGPT -

useMemo is a React Hook that is used to memoize the result of a computation, preventing unnecessary recalculations and improving performance. In simpler terms, it allows you to memoize or cache the result of a function so that it is only recalculated when its dependencies change.

In the e-commerce store example with the shopping cart total price, using useMemo prevents the total price from being recalculated on every render, which can be beneficial for performance when the shopping cart contents change frequently.

In summary, useMemo is advantageous over useState when you need to memoize the result of a computation to optimize performance and prevent unnecessary renders, especially in scenarios involving complex calculations or expensive operations.

Interviewer: "**You shouldn't really use useEffect to fetch data**. For the simple reason is that fetching data is a complex process - loading states error states, etc..."

"It's better to default to a library such as React Query, but even if you use React Query, you need to know and understand about useEffect() because if you for some reason you need to build it yourself or use useEffect in a different way you need to understand the lifecycle of useEffect."

Interviewer:

"I don't use useMemo() too much or useCallback()"

"for useCallback, sometimes i need to pass a function to a useEffect and I don't want it to infinitely re-trigger.. I'll wrap it in a callback OR if you're passing that function to a component that you don't want to render unnecessarily, you can also use useCallback().

ChatGPT - useCallback is used to memoize a function so that it doesn't get recreated on every render unless its dependencies change. It's particularly useful when passing functions as props to child components or when defining functions used in useEffect dependencies.

---

What is useRef and how does it work?

ChatGPT -
In essence, useRef is a tool for holding mutable values that persist across renders. It's commonly used for interacting with the DOM, storing previous values, or managing values that don't trigger re-renders.

In this example, the quantityRef is used to manage the quantity of the product. The handleIncrease and handleDecrease functions update the quantityRef.current value without causing a re-render of the component. This can be beneficial when you have certain values that should not trigger a component update but need to be accessible and mutable.

Interviewer: "If you work with 3rd party libraries you sometimes need to give them a ref to access some functionality of a library"

"Have you ever needed to focus on input? For ex. on mount, you have a form and you want to focus the first input you could use a ref to call the focus method on it"

there are values you can pass in in MUI. Also there are attributes you can pass to functional components in tailwind CSS to focus an input. useRef() is probably used under the hood.

---

Difference between useState and useRef?

Interviewer: "useRef functions almost the same as useState - you can store values in it. HOWEVER whatever you store in useRef is **Non-reactive**. Meaning it will not trigger a re-render of the component."

"if you use this value in the return, you're gonna get an outdated value"

"but this means in a function you can assign a new value to a ref **and then on the next line, directly access that value.**

"**with state you cannot do this.** You have to wait for a whole new re-render.

Simple Ex:
const Counter = () => {
// Using useState to manage a stateful value
const [stateCount, setStateCount] = useState(0);

// Using useRef to store a non-reactive value
const refCount = useRef(0);

const handleUpdateCounts = () => {
// Update the stateful count using useState
setStateCount(stateCount + 1);

    // Update the non-reactive count using useRef
    refCount.current = refCount.current + 1;

    // Log both counts to the console
    console.log('Stateful Count:', stateCount); // This will log the outdated value
    console.log('Non-reactive Count:', refCount.current); // This will log the updated value

};

return (

<div>
<h2>Counter</h2>
<p>Stateful Count: {stateCount}</p>
<p>Non-reactive Count: {refCount.current}</p>
<button onClick={handleUpdateCounts}>Update Counts</button>
</div>
);
};

export default Counter;
In this example:

We have a stateful count (stateCount) managed by useState.
We have a non-reactive count (refCount) managed by useRef.
The handleUpdateCounts function updates both counts when the button is clicked.
We log both counts to the console to illustrate the non-reactive nature of useRef.
When you click the "Update Counts" button, you'll observe that the logged value for the stateful count (stateCount) is outdated in the console, while the non-reactive count (refCount.current) reflects the updated value immediately. This demonstrates that changes made to a useRef value don't trigger a re-render, allowing you to directly access the updated value in the same function.

In contrast, with useState, you would have to wait for the next re-render to see the updated state value reflected in the component.

---

What is Context and how does it work?

you have a store at the top level of your components tree that all children can access regardless of where they are in the tree.

---

Why do we want to avoid prop drilling?

"It can get ugly quickly"

"annoying dragging the state through several components"

Interviewer: "renaming can be an issue or even worse you decide this component, in the middle of the chain should no longer be there, what do you do?"

---

When does it make sense to have a Context?

Interviewer: "Dark Mode! it should be accessible in your entire app and it should be updatable from any component."

---

What is state management and when is it useful?

Interviewer: "Not applications need state management libraries, you can build a big complex app w/o state management"

"It comes useful when you need a more robust global state that useContext can't handle"

---

What is the recommended way to structture your React code?
Interviewer: "thinking of components, what code goes into components and how components use other components. Whats the recommended way to approach it"

"Good to break the view from your components - components folder, hooks folder (custom), break down the components into 'dumb components' components that just render things and then maybe more complex components that handle logic."

Why would you say it's good do to is that way?

"Separation of concerns"

"Better to work in a neater structured code. makes code maintanable, easier to read + work with, easier to onboard."

Interviewer: "A good sign of a good react project is 1) get into project fresh without knowing anything about it 2) immediately spot patterns predict where things are going to be."

"makes it easier to test components if they are separated."

---

What is a good way to test your react apps?

"didn't write tests, used Cypress for end-to-end tests"

"to see everything is being rendered properly and data is there and if you change something the code you introduced may have had some breaking changes"

"Cypress is it's own app. you run it and then you have your test files, and then you run your test files and it runs a browser and it runs through your whole application. based on the code you wrote inside the test, it will check the values inside your DOM and see if those values match the ones in your test."

Interviewer: "it goes through your app like a user would"

"Theres also unit testing, tests each individual component - not very common."

---

What are the React dev tools, and what can you use them for?

"There is a dev tool for chrome extension"

"Use it to see the component tree - in bug testing you can see if there are any errors or weird behavior and use the dev tools to traceback the component tree"

Interviewer: "one word - Performance! if something's not performing as you expect it to or as fast as you expect, take a look at dev tools look at all components look at how long it takes for each component to render, look at how many times each component is rendering - see the reasons why each component is rendering. Use them to validate your changes."
