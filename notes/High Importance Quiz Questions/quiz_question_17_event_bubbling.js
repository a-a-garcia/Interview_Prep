// HTML:
// <div id="parent">
//   <button id="child">Click me!</button>
// </div>

const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener('click', () => {
  console.log('Parent element clicked');
});

child.addEventListener('click', () => {
  console.log('Child element clicked');
});

//When you click the "Click me!" button, both the child ANd parent event handlers will be triggered, due to event bubbling.

//Example of event delegation

// Let's consider a scenario where you have an unordered list (<ul>) with several list items (<li>), and you want to handle a click event for each list item. Instead of attaching individual event handlers to each list item, you can leverage event delegation by attaching a single event handler to the common ancestor, in this case, the unordered list.

<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  {/* <!-- ... More list items ... --> */}
</ul>

// Get the common ancestor, in this case, the <ul> element
var myList = document.getElementById('myList');

// Add a click event listener to the <ul> element
myList.addEventListener('click', function(event) {
  // Check if the clicked element is an <li>
  if (event.target.tagName === 'LI') {
    // Log the text content of the clicked <li>
    console.log('Clicked on:', event.target.textContent);
  }
});

// In this example, the click event is handled by the <ul> element, and the event object (event) is inspected to determine which <li> was clicked. This technique is more efficient than attaching individual event handlers to each list item, especially when dealing with a large number of similar elements.

//Example of stopPropagation()

// Let's consider a situation where you have nested elements, and you want to stop the event propagation when a specific inner element is clicked.

<div id="outer">
  <p>Outer Element</p>
  <div id="inner">
    <p>Inner Element</p>
  </div>
</div>

// Get the outer and inner elements
var outerElement = document.getElementById('outer');
var innerElement = document.getElementById('inner');

// Add click event handlers to both elements
outerElement.addEventListener('click', function(event) {
  console.log('Outer Element Clicked!');
});

innerElement.addEventListener('click', function(event) {
  console.log('Inner Element Clicked!');
  // Stop the event propagation when the inner element is clicked
  event.stopPropagation();
});

// In this example, there are two click event handlers—one for the outer element and one for the inner element. When you click on the inner element, the event will still reach the outer element due to event bubbling. However, the stopPropagation() method is called within the click handler for the inner element, preventing the event from further propagating up the DOM tree.

// As a result, when you click on the inner element, you will see the message 'Inner Element Clicked!' in the console, but you won't see the message 'Outer Element Clicked!' even though both elements have click event handlers. 