---
id: 8bh0q9v14251t2njhwiyjoj
title: Quiz Question 16
desc: ''
updated: 1702431398478
created: 1702430493908
---
**#16 Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`?**

**Answer:**

In a nutshell - placing CSS links between head tags and JS script tags just before closing body tag allows for faster rendering of the page and better overall performance.

* **Placing `<link>`s in `<head>`**
Putting `<link>`s in `<head>` is part of the proper specification in building an optimized website. When a page first loads, HTML and CSS are being parsed simultaneously; HTML creates the DOM (Document Object Model), and CSS creates the CSSOM (CSS Object Model). Both are needed to create the visuals in a website, allowing for a quick "first meaningful paint" timing. Placing CSS `<link>`s in the `<head>` ensures that the stylesheets are loaded and ready for use when the browser starts rendering the page.

The progressive rendering is a metric that sites are measured on in their performance scores. Putting stylesheets near the bottom of the document is what prohibits progressive rendering in many browsers. Some browsers block rendering to avoid having to repaint elements of the page if their styles change. The user is then stuck viewing a blank white page. Other times there can be flashes of unstyled content, which show a webpage with no styling appled.

* **Placing `<script>`s just before `</body>`**
`<script>` tags block HTML parsing while they are being downloaded and executed, which can slow down the display of your page. Placing the `<script>`s at the bottom will allow the HTML to be parsed and displayed to the user first.

An exception for position of `<script>`s at the bottom is when your script contains `document.write()`, but it's not good modern practice to use `document.write()`. Also, placing `<script>`s at the bottom means that the browser cannot start downloading scripts until the entire document is parsed. This ensures your code that needs to manipulate DOM elements will not throw an error and halt the entire script. If you need to put `<script>`s in the head, use `defer`, which will achieve the same effect of running the script only after the HTML is parsed but the browser can kick off the network request earlier to download the script.

Keep in mind that putting scripts just before the closing `</body>` tag will create the illusion that the page loads faster on an empty cache (since the scripts won't block downloading the rest of the document). However, if you have some code you want to run during page load, it will only start executing after the entire page has loaded. If you put those scripts in the head tag, they would start executing before - so on a primed cache, the page would actually appear to load faster.

________

Place Scripts in <head>:

Pros:
* Scripts start executing earlier in the page load process.
* Useful for small scripts that don't depend on elements in the <body>.
Cons:
* May delay the rendering of HTML content, making the page appear to load slower.

Place Scripts Before </body> Tag:

Pros:
* HTML content renders without waiting for scripts to download and execute.
* The page appears to load faster on an empty cache.
Cons:
* If scripts have code that needs to run during page load and depends on elements in the <body>, they will only start executing after the entire HTML document is loaded.

Use async or defer Attributes:

async:
* The script will be downloaded asynchronously, and it will execute as soon as it's downloaded.
* It doesn't guarantee the order of execution among multiple async scripts.
defer:
* The script will be downloaded asynchronously, but it will only execute after the HTML document is parsed.
* Multiple defer scripts will execute in the order they appear in the document.