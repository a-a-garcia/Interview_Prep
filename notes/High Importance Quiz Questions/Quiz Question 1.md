---
id: q68zfqja8gtqobdjp4qrcyf
title: Quiz Question 1
desc: ''
updated: 1701810630589
created: 1701802066911
---
***#1 Describe the difference between `<script>`, `<script async>` and `<script defer>`.***

__1st BLIND ANSWER :__ 

The `<script>` tag is an HTML tag that denotes the presence of a javascript file, to be loaded when the DOM is loaded. Plain `<script>` means the JS will execute whenever it 
is encountered in the head, which usually means immediately. `<script async>` means the JS will execute asynchronously. (?) and `<script defer>` means the JS will load after everything else in the page has loaded.

**CORRECT ANSWER:**

`<script>` tags are used to include JavaScript on a web page. The `async` and `defer` attributes are used to change how/when the loading and execution of the script happens.

***Plain `<script>`*** - when encountered, HTML parsing is blocked, the script is **fetched and executed immediately.** HTML parsing resumes after the script is executed.

***`<script async>`*** - when encountered the script will be **fetched in parallel to HTML parsing, and executed as soon as it is available (potentially, before HTML parsing completes)**. It will not necessarily be executed in the order in which it appears in the HTML. Use `async` when the script is independent of any other scripts on the page, for example, analytics.

***`<script defer>`*** - when encountered, the script will be **fetched in parallel to HTML parsing, however unlike `async`, it will execute when the document has been fully parsed, but before firing `DOMContentLoaded`**. If there are multiple of them, each deferred script is execued in the order they appeared in the HTML document. If a script relies on a fully-parsed DOM, the `defer` attribute will be useful in ensuring that the HTML is fully parsed before executing.

MISC:
* Generally, `async` should be used for scripts that are not critical to the initial render of the page AND do not depend on each other.
* `defer` should be used for scripts that depend on / is depended on by another script.
* `async` + `defer` are ignored for scripts that have no `src`.
* `<script>`'s w/ `defer` or `async` that contain `document.write()` will be ignored with a message like "A call to document.write() from an asynchronously-loaded external script was ignored".