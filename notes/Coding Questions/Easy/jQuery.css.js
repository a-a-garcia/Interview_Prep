/* In Vanilla JavaScript, the way to set styles on an element would be as follows:

const buttonEl = document.querySelector('button');
buttonEl.style.color = 'red';
buttonEl.style.backgroundColor = 'tomato';
buttonEl.style.fontSize = '16px';

jQuery is a library that simplifies DOM manipulation (among other things). With jQuery (using the $ alias function), the above can be simplified into:

const buttonEl = $('button');
buttonEl.css('color', 'red');
buttonEl.css('backgroundColor', 'tomato');
buttonEl.css('fontSize', '16px');

The return value of most jQuery manipulation APIs return the jQuery object itself, so that method calls can be chained. The above can be further simplified again:

$('button')
  .css('color', 'red')
  .css('backgroundColor', 'tomato')
  .css('fontSize', '16px');
Additionally, if the second parameter is omitted, the value of that style property is returned.

// <button style="color: red">Submit</button>
$('button').css('color'); // 'red'
Implement the jQuery single-character function $ which only needs to supports the css() method that either gets the value of a computed style property or sets a CSS property on the matched element. */

export default function $(selector) {
   // Use document.querySelector to find the element with the specified selector
   const element = document.querySelector(selector);

   // Return an object with a css method
   return {
     /**
      * @param {string} prop
      * @param {boolean|string|number} value
      * @return {Object|void|string}
      */
     css: function (prop, value) {
       // Getter case.
       if (value === undefined) {
         // No matching elements.
         if (element == null) {
           // If no matching element, return undefined
           return undefined;
         }
 
         // Get the computed style value for the specified property
         const value = element.style[prop];
         // If the value is an empty string, return undefined; otherwise, return the value
         return value === '' ? undefined : value;
       }
 
       // Setter case.
       if (element != null) {
         // If element is not null, set the style property with the specified value
         element.style[prop] = value;
       }
 
       // Return the current object (for chaining purposes)
       return this;
     },
   };
}

  // Clarification Questions

  // What should happen if there are no elements match the selector? 
  // In jQuery when there are no matched elements, nothing occurs, so we can follow that.

  // What do we return if we try to get the value of a CSS property that isn't set on the element?
  //  We should return undefined as per jQuery.

  //SOLUTION

  // The toughest part of this question is how to implement method chaining on objects. We have to maintain a reference to the element, which can be done either via closures or using a class property. Classes are overkill here, so we will use the closure approach. We can just return an object with a single css() method. To allow for method chaining, the method has to return this at the end.

  // Getting and setting the CSS properties is straightforward with the use of the HTMLElement.style property.


