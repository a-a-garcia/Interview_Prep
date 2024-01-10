---
id: aqp79ln66diazj16oylzu2m
title: Quiz Question 30
desc: ''
updated: 1704839738667
created: 1704839472043
---
**Describe Block Formatting Context (BFC) and how it works.**

A Block Formatting Context (BFC) is a part of the visual CSS rendering of a web page in which block boxes are laid out.

Floats, absolutely position elements, `inline-blocks`, `table-cells`, `table-caption`s, and elements with `overflow` other than `visible` (except when that value has been propagated to the viewport) establish new block formatting contexts.

Knowing how to establish a block formatting context is important, because without doing so, the containing box will not contain floated children. This is similar to collapsing margins, but more insidious as you will find entire boxes collapsing in odd ways.

A BFC is an HTML box that satisfies at least one of the following conditions:

* The value of `float` is not `none`.
* The value of `position` is neither `static`, nor `relative`.
* The value of `display` is `table-cell`, `table-caption`, `inline-block`, `flex`, or `inline-flex`, `grid`, or `inline-grid`.
* The value of `overflow` is not `visible`.

In a BFC, each box's left outer edge touches the left edge of the containing block (for right-to-left formatting, right edges touch). Vertical margins between adjacent block-level boxes in a BFC collapse.