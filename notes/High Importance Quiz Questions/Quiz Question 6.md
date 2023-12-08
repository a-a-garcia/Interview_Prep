---
id: hawb8bpbdl55eicw4a2vmcc
title: Quiz Question 6
desc: ''
updated: 1702060602474
created: 1702060602474
---
**#6 What does `*{ box-sizing: border-box; }`** do?

__1st Blind Answer__: By default, box-sizing for a page is set to box-sizing: content box. This means that in an element's box model, padding and border are not included in an element's total height and width calculation. Setting it to box-sizing: border-box allows padding and border to be included. (Margins are never added, regardless of content or border-box.)

**Correct Answer**:
`*{ box-sizing: border-box; }` makes ever element on the page use the `box-sizing: border-box` approach for calculating the elements' `height` and `width`.

__What's the difference?__
By default, elements have `box-sizing: content-box` applied, and only the content size is being accounted for if an element has `height` and `width` specified. 

`box-sizing: border-box` changes how the `width` and `height` of elements are being calculated, `border` and `padding` are also being included in the calculation.

The `height` of an element is now calculated by the content's `height` + vertical `padding` + vertical `border` width. The `width` of an element is now calculated by the content's `width` + horizontal `padding` + horizontal `border` width.

In summary - `box-sizing: content-box (default)` only includes the element's content in the calculation of its height and width. `box-sizing: border-box` includes content, padding, and border. `margin` is never included, either for content-box or border-box.

__What's the advantage of border-box?__

Taking into account `padding`(s) and `border`(s) as part of the box model **better resonates with how designers actually imagine content in grids.** It's a much more intuitive way to thank about boxes. So, many CSS frameworks set border-box globally so that all elements use such a box model by default.
