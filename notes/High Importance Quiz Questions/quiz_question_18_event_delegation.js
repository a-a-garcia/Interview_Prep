// HTML:
// <ul id="item-list">
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>

const itemList = document.getElementById('item-list');

itemList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    console.log(`Clicked on ${event.target.textContent}`);
  }
});

// In this example, a single click event listener is attached to the <ul> element. When a click event occurs on an <li> element, the event bubbles up to the <ul> element, where the event listener checks the target's tag name to identify which list item was clicked.