---
id: m53934jc8gg003zf4viueoe
title: Quiz Question 8
desc: ''
updated: 1702152058256
created: 1702150834090
---
**#8 What is the CSS `display` property and can you give a few examples of its use?**

__1st Blind Answer__:
The `display` property refers to the way in which elements are visible and positioned on the screen. Three of the most common display properties I see are block, flex, and grid. `display: flex` is probably the most widely used property, allowing elements to be spaced evenly within a div.

__Correct Answer__:
The common values for the `display` property are as follows:

* `none` : Does not display an element (the element no longer affects the layout of the document). All child elements are also no longer displayed. The document is rendered as if the element did not exist in the document tree.

* `block` : The element consumes the whole line in the block direction (which is usually horizontal).

* `inline` : Elements can be laid out beside each other.

* `inline-block` : similar to `inline`, but allows some `block` properties like setting `width` and `height`.

* `flex` : Behaves as a block-level `flex` container, which can be manipulated using flexbox model.

* `grid` : Behaves as a block-level `grid` container using grid-layout.

* `table` : Behaves like the `<table>` element.

* `table-row` : Behaves like the `<tr>` element.

* `table-cell` : Behaves like the `<td>` element.

* `list-item` : Behaves like a `<li>` element, which allows it to define `list-style-type` and `list-style-position`.