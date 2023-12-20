---
id: z22gfb13tetl6qolo717oss
title: Quiz Question 17
desc: ''
updated: 1703020319092
created: 1703020319092
---
**Describe event bubbling**

**Correct Answer:** Event bubbling is a propagation in the DOM where an event (such as a click, or keyboard event), is first triggered on the target element that initiated the event. Then, it propgates upwards (bubbles) through the DOM tree to the root of the element.

During the bubbling phase, the event starts at the target element and "bubbles up" through its ancestors in the DOM hierarchy. This means that the event handlers attached to the target element and its ancestors can all potentially receive and respond to the event. 

(refer to JS code snippet)

* Event propagation can be stopped during the bubbling phase using the `stopPropagation()` method. If an event handler calls it, it prevents the event from further bubbling up the DOM tree, ensuring only the handlers of the elements up to that point in the hierarchy are executed.

* Event bubbling is the basis for a technique called "event delegation", where you attach a single event handler to a common ancestor of multiple elements, and use event delegation to handle events for those elements efficiently. This is particularly useful when you have a large number of similar elements, like a list of items, and you want to avoid attaching individual event handlers to each item.