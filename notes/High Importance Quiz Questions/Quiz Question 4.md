---
id: 42lfzjkhydvuak75zxk5kv6
title: Quiz Question 4
desc: ''
updated: 1701813914375
created: 1701811639538
---
***#4 Explain your understanding of the box model, and how you would tell the browser in CSS to render your layout in different box models.***

**1ST Blind Answer:** The box model refers to the layout by which all visible elements on a web page are defined. It consists of each element's padding, margin, and actual content size. You can tell the browser in CSS to render your layout in different box models by changing the box-sizing property of all elements on a page. Most commonly, you can set it to border-box to ensure that all eleemnts start with no default margin or padding.

**CORRECT ANSWER**: The CSS Box model describes the rectangular boxes that are generated for elements in the document tree, and laid out according to the visual formatting model. Each box has a content area (e.g. text, an image, etc.) and optional surrounding `padding`, `border`, and `margin`.

The CSS box model is responsible for calculating:
* How much space a block element takes up.
* Whether or not borders and/or margins overlap, or collapse.
* A box's dimensions.

*Box Model Rules*:
* The dimensions of a block element are calculated by `width`, `height`, `padding`, and `border`.

* If no `height` is specified, **a block level element will be as high as the content it contains, plus `padding`.** (unless there are floats; https://www.greatfrontend.com/questions/quiz/describe-floats-and-how-they-work)

* If no `width` is specified, **a non-'`float`'-ed block element will expand to fit the width of its parent minus the `padding`, unless it has a `max-width` property set, in which case it will be no wider than the specified maximum width.**
    * Note - Some block level elements (`table`, `figure`, `input`) have inherit widths and may not expand to fill the full width of their parent
    * `span` is an inline-level element and does not have a default width, so it will not expand to fit.
    

* The `height` of an element is calculated by the content's `height`.

* The `width` of an element is calculated by the content's `width`.

* By default ('`box-sizing: content-box`'), `padding` and `border` are not part of the `width` and `height` of an element.

* `margin`s are not counted towards the actual size of the box. It affects the total space that the box will take up on the page, but only the space outside the box. The box's area stops at the `border` - it doesn't extend into the `margin`.

*About `box-sizing`...*

* '`box-sizing: content-box`': The default value of `box-sizing`, adheres to rules above.

* '`box-sizing: border-box`': The `width` and `height` will include the content, padding and border, but not the margin. Much more intuitive, so many CSS frameworks (bootstrap, tailwind.. ) set `* box-sizing: border-box` globally.