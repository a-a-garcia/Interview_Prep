---
id: 2e9ynhc5trmrfp07xuyskko
title: Quiz Question 24
desc: ''
updated: 1704827367947
created: 1704826261143
---
**Is there any reason you'd want to use `translate()` instead of `absolute` positioning, and vice-versa? Why?**

**Answer:**

`translate()` is a possible value of the CSS `transform` property.

When using `translate()`, the element still occupies its original space (sort of like `position: relative`). Changing `transform` or `opacity` does not trigger browser reflows or repaints, but does trigger compositions.

Vs `absolute` - when changing the absolute position of elements, the elements are removed from the flow of the page, and the position of the surrounding elements will be affected. Hence, the page layout will have to be recalculated. Changing absolute positioning triggers `reflow`. `transform` causes the browser to create a GPU layer for the element but changing absolute positioning properties uses the CPU.

Hence, `translate()` is more efficient and will result in shorter paint times for smoother animations.

IN SHORT:
* If your goal is smooth animations or transitions, especially for moving elements, translate() is often a better choice.

* If you need precise control over the positioning of an element or want to create layered layouts, absolute positioning might be more appropriate.