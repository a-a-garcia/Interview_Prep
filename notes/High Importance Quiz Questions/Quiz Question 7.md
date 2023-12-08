---
id: p905o6zueebz3ib0nu8vtqn
title: Quiz Question 7
desc: ''
updated: 1702064465935
created: 1702064465935
---
**#7 What is CSS selector specificity and how does it work?**

__1st Blind Answer:__ CSS selector specificity refers to the hierarchy in which styles are applied. If there are two rules that are being applied to an element's style property, the one that gets applied is subject to CSS selector specificity. The hierarchy is as follows, from least specific to most: 1 - element, 2 - class, 3 - id.

**Correct Answer:**
The browser determines what styles to show on an element depending on the specificity of CSS rules.

We assume that the browser has already determined the rules that match a particular element.

Among the matching rules, the specificity, four comma-separate values, `a, b, c, d` are calculated for each rule based on the following:

1. `a` is whether inline styles are being used. If the property declaration is an inline style on the element, `a` is 1, else 0.

2. `b` is the number of ID selectors.

3. `c` is the number of classes, attributes, and pseudo-classes selectors.

4. `d` is the number of tags and pseudo-elements selectors.

The resuling specificty is not a single numerical score, but an array of values that can be compared, column by column. When comparing selectors to determine which has the highest specificity, look from left to right, and compare the highest value in each column. 

A value in column `b` will override values in columns `c` and `d`, no matter what the might be. IE - a specificty of `0, 1, 0, 0` would be greater than one of `0, 0, 10, 10`.

In cases of equal specificity: the latest rule is the one that counts. If you have written the same rule into your stylesheet (regardless of internal or external) twice, then the lower rule in your stylesheet is closer to the element to be styled. It is deemed to be more specific and therefore will be applied.

It's a better practice to write CSS rules with low specificity, so that they can be easily overridden if necessary. When writing CSS UI component library code, it's important that they have low specificities so that users of the library can override them without using too complicated CSS rules just for the sake of increasing specificity or resorting to `!important`.