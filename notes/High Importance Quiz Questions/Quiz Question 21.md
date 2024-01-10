---
id: zr4wz6ht24u3wu3a0mmbuwd
title: Quiz Question 21
desc: ''
updated: 1703032755371
created: 1703032252596
---
**Explain how a browser determins what elements match a CSS selector**.

**Correct answer**:

Browsers match selectors from rightmost (key selector) to the left.

They filter out elements in the DOM according to the key selector, and traverse up its parent elements to determine matches.

The shorter the length of the selector chain, the faster the browser can determine if that element matches the selector.

For example, with a selector `p span`, browsers firstly find all the `<span>` elements and traverse up its parent all the way up to the root to find the `<p>` element. For a particular `<span>`, as soon as it finds a `<p>`, it knows that the `<span>` matches the selector, and can stop traversing its parents.

___

Suppose you have the following HTML structure:

<div>
  <p>
    <span>Text inside span</span>
  </p>
</div>

Now, imagine you have a selector `p span`. This selector is asking the browser to find all <span> elements that are descendants of a <p> element.

Here's the step-by-step process browsers generally follow when matching such a selector:

1. Find all <span> elements:

    *  The browser starts by finding all <span> elements in the document.

2. Traverse up the DOM tree for each <span>:

    * For each <span> found, the browser traverses up its parent elements until it reaches the root of the document.
    * In this case, it starts from the <span> and goes up to the <p>, then to the <div>, and finally to the root.
    
3. Check if the <span>'s parent is a <p>:

    * At each step of the traversal, the browser checks if the current parent is a <p> element.
    
4. Stop when <p> is found:

    * As soon as it finds a <p>, it knows that the <span> matches the selector (p span).
    * It can stop traversing the parents because it has found a match for the entire selector.

So, in this example, for the <span> inside the <p>, the traversal stops as soon as it reaches the <p> element because it satisfies the condition of being a <span> within a <p>. The browser doesn't need to go all the way up to the root of the document once it finds a match for the selector. This optimization helps browsers efficiently handle complex selectors and improves performance when selecting elements based on hierarchical relationships.