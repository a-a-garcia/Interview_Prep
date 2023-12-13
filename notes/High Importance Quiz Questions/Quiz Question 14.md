---
id: rgzk5130t1pit0x77kbufst
title: Quiz Question 14
desc: ''
updated: 1702423379083
created: 1702423026226
---
**#14: What's the difference between `inline` and `inline-block`?**

**Correct Answer:**

Helpful demonstration:
https://www.youtube.com/watch?v=x_i2gga-sYg

`block`:
* Size: Fills up the width (100%) of its parent container.
* Positioning: Start on a new line and tolerates no HTML elements next to it (except when you add `float`)
* Can specify `width` and `height`: Yes
* Can be aligned with `vertical-align`: No
* Margins and paddings: All sides respected

`inline`:
* Size: Depends on content.
* Positioning: Flows along with other content, and allows other elements beside it.
* Can specify `width` and `height`: No. Will ignore if you set them
* Can be aligned with `vertical-align`: Yes
* Margins and paddings: Only horizontal sides respected. Vertical sides, if specified, don't affect layout. Vertical space it takes up depends on `line-height`, even though the `border` and `padding` appear visually around the content (you can't give inline elements heights, so size won't change, even though visually it may appear to change if you set padding/border).
* Float: Becomes like a `block` element where you can set vertical margins and paddings.

`inline-block`:
* Size: Depends on content
* Positioning: Flows along with other content, and allows other elements beside it.
* Can specify `width` and `height`: Yes
* Can be aligned with `vertical-align`: Yes
* Margins and paddings: All sides respected - **why it's useful!**
