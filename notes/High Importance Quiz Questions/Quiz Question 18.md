---
id: axfx1bku0g2chdbhiuow6gr
title: Quiz Question 18
desc: ''
updated: 1703022041261
created: 1703021472646
---
**Explain event delegation**

**Correct Answer:** Event delegation is a design pattern in JS used to efficiently manage and handle events on multiple child elements, by attaching a single event listener to a common ancestor element.

It's particularly valuable in scenarios where you have a large number of similar elements, such as <li>'s, and want to streamline event handling.

**How it works**:

1. **Attach a listener to a common ancestor**: Instead of attaching individual event listeners to each child element, you attach a single event listener to a common ancestor higher in the DOM hierarchy

2. **Event bubbling**: When an event occurs on a child, it bubblts up through the DOM tree to the common ancestor element. During this propagation, the event listener on the common ancestor can intercept and handle the event.

3. **Determine the target**: Within the event listener, you can inspect the event object to identify the actual target of the event (the child element that triggered the event). You can use properties like `event.target` or `event.currentTarget` to determine which specific child element was interacted with.

4. **Perform action based on the target**: Based on the target element, you can perform the desired action or execute code specific to that element. This allows you to handle events for multiple child elements with a single event listener.

**Benefits**:

1. **Efficiency**: It reduces the # of event listeners. Improves memory useage and performance, especially when you have a large # of elements.

2. **Dynamic elements**: Works seamlessly with dynamically added or removed child elements, as the common ancestor continues to listen for events on them.

**Use Cases**:

Event delegation is commonly used in scenarios such as:

* Managing lists, menus, tables w/ many items or rows.
* Handling dynamic content in SPAs.
* Simplifying code by avoiding the need to attach & remove event listeners for elements that change.