---
id: 0iwdj9lsuzhnqiehlkzgzxi
title: Quiz Question 13
desc: ''
updated: 1702410930094
created: 1702409300121
---
**#13: What's the difference between a `relative`, `fixed`, `absolute`, and `static`-ally positioned element?**

**Correct Answer**:

Helpful demonstration:
https://www.youtube.com/watch?v=h_Smqpqs_1k

A positioned element is an element whose computed `position` property is either `relative`, `absolute`, `fixed`, or `sticky`.

* `static` : The default position; the element will flow into the page as it normally would. You can't use `top`, `bottom`, etc (or `z-index`).

* `relative` : The element's position is adjusted relative to itself, without changing layout (and thus, leaving a gap for the element where it would have been had it not been `position`'ed)

* `absolute` : The element is removed from the flow of the page, and position at a specified position relative to its closest positioned ancestor (if any), or otherwise relative to the initial containing block. Absolutely-positioned boxes can have margins, and they do not collapse with any other margins. These elements do not affect the position of other elements.

* `fixed` : the element is removed from the flow of the page, and positioned at a specified position relative to the viewport. It doesn't move when scrolled.

* `sticky` : A hybrid of relative and fixed. The element is treated as `relative` position until it crosses a specified threshold, at which point it's treated as `fixed`.
