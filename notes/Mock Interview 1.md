---
id: 3waybmqezjnv9bybomcun0k
title: Mock Interview 1
desc: ''
updated: 1703020274899
created: 1702519023163
---
Introduce myself, focusing on the development side, and end with saying why I want to work there.

My 3 biggest strengths and weaknessess?

___

**Is the frontend developer responsive for the speed of a website?**

* Yes. They're responsible for implementing efficient code, and optimizing assets that affect the loading time of a website. This includes:
    - Minimizing the size of HTML, CSS, and JS files through minification, compression, and writing clean code.
    - Optimizing images and media.
    - Implement lazy loading techniques
    - Reduce the # of HTTP requests.
    - Using efficient CSS selectors and JS methods.
    - Implement caching strategies.

___

**Is 20MB worth of initial network requests big for a website?**

* Yes. It may lead to a poor user experience, especially for users with slower internet connections or limited data plans. 
    - localStorage and sessionStorage are both typically capped out at 5MB.
    - a large initial download can significantly increase the time it takes for the website to load.
    - Users are more likely to abandon a site that takes more than a few seconds to load.
    - Search engines consider page load speed as a ranking factor

___

**How big (in MB) should a regular webshop site be?**
* Around 2-3 MB or less, including all assets. However, this could vary depending on the type of site. An image-heavy site could be more.

___

**What is CLS?**
* CLS stands for Cumulative Layout Shift. It's a metric that measures the visual stability of a web page during loading. A low CLS indicates a more stable and user-friendly experience, as it means page elements are less likely to shift unexpectedly.

___

**Explain what happens when we type an URL into the browser's address bar? (I was hinted to mention DNS and HTTPS)**
1. The browser initiates a **Domain Name System (DNS) lookup to translate the human-readable domain (e.g. www.example.com) into an IP address.**
2. Once the IP address is obtained, the browser sends an HTTP or HTTPS request to the web server associated with that IP address.
3. The web server processes the request and will retrieve HTML, CSS, JS and any other assets.
4. If **it's an HTTPS request, a secure connection is established through a process called the TLS/SSL handshake which ensures encrypted communcation between the browser and the server.**
5. The server sends back the requested content back to the browser in the form of HTTP responses.
6. The browser receives the content and renders the web page.

___

**If a website is unavailable, what can be the reason?**
1. The web server hosting the site may be experiencing downtime due to maintenance, technical issues, high traffic (organic or inorganic via DDoS attacks)
2. Problems with network infrastructure, DNS issues, routing problems, server connectivity
3. Outdated software/frameworks on which the website relies may cause compatibility issues or vulnerabilities. Or dependencies/APIs experiencing issues. Issues/bugs in the website's code
4. Expiration of domain registration/hosting.
5. Security measures or firewalls may block access intentionally or unintentionally

___

**How would I add graphics such as a two-tone logo to a website?
**
* One effective approach is using SVG (Scalable Vector Graphics). They can be scaled to any size without losing quality. They can be styled with CSS.

Code Snippet:

//svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Path for the first tone -->
  path fill="#FF0000" d="M0 0h50v100H0z"
  
  <!-- Path for the second tone -->
  path fill="#00FF00" d="M50 0h50v100H50z"
/svg//

___

**If I was loading 10 different images on a website, how many total HTTP GET requests is that? How to optimize that?**

* Each image typically triggers a separate GET request.

* To optimize, you can implement **lazy loading, meaning that images are loaded only when they com into the user's viewport, reducing the initial page load time.** This is beneficial for pages with a large number of images.

* Optimize and compress images to reduce their file sizes without comprimizing too much on quality - try ImageOptim, TinyPNG or webpack image loaders.

* Combine small images into a single sprite sheet, so that you can server multiple images with a single HTTP request. CSS background positioning can then be used to display the specific image

* Utilize a CDN (content deliver network) to cache and serve images from servers geographically closer to the user.

* Use `srcset` to provide different image sources based on the user's device and screen size.

___

**What do I know about HTML headings?**

* HTML headings are defined with the `<h1>` to `<h6>` tags, where `<h1>` represents the highest and most important heading, and each subsequent heading from there decreasing in importance, `<h6>` being the lowest level.

* Headings structure the content for beader readability and also play a crucial role in SEO by indicating the hierarchy and importance of info.

____


**What HTML tag would I use for selecting the quantity of a product in a shopping cart?**

* A `<select>` tag with the quantities contained in `<option>` tags could be appropriate.

___


**What is CSS specificity?**

* CSS specificity is the set of rules that determines what styles are applied to an element when there are conflicting styles. It can be represented as a 4 part or 4 column value, each part corresponding to a category of selectors. From highest specificity to lowest specificity they are:

1. Inline Styles: Those applied directly to an element using the `style` attribute, with `<span>` tags.

2. ID selectors: denoted by `id`

3. Class selectors, Attribute selectors, and pseudo-classes: target elements based on class names, attributes, or pseudo classes like `:hover` and :`:nth-child()

4. Element (tag) selectors: Element selectors, such as `div` or `p`. Apply styles to all elements of that type on the page.

When two or more conflicting styles are applied to an element, whichever is more specific is applied. If there's a tie, the style that's defined later in the CSS sheet is applied.

___

**What are the ways of selecting colors in CSS? What color is #0000ff?**

1. Keyword Names: defined by CSS, such as `red`, `green`, `blue`, `cyan`..

2. RGB Values

3. HEX Codes: Hexadecimal code

4. RGBA: similar to RGBA, but has an additional alpha property to specify opacity

5. HSL: (Hue, Saturation, Lightness)

`#0000ff` represents pure blue with no red or green.

___

**What is the difference between absolute and relative units in CSS?**

* Absolute units, like `px` are fixed and don't rely on any reference. They're specific, unchanging measurements that devs define.

* Relative units like `em` and `rem` are defined in relation to another value
___

What is the difference between em and rem?

* `em` is relative to the font-size **of its closest parent, of the element itself**
* `rem` is relative to the font-size of the root element (usually the `<html>` tag).

___

**What is the difference between inline and block elements? Is <img> inline or block? Can we put block elements inside of inline elements?**

1.  * Inline elements - Do not start on a new line and only take up as much width as necessary. The default for images.
* Block elements - Start on a new line and take up the full width available

2. Block-level elements cannot be placed inside inline, because block level elements create a new box, and placing them inside inline elements would disrupt the flow of the document. It's not valid HTML. Use a standard `<div>` if you need to group elements.

___

**What is the <img> tag consisted of? What do we put in the "alt" attribute if the image is decorative?**

1. `src`, Source: specifies the URL or file path of the image.
2. `alt`, Alternative Text: provides alternative text thats displayed if the image can't be loaded OR for accessibility purposes. It's essential for screen readers. **If the image is decorative, use an empty or null value.** This conveys to screen readers the image doesn't convey important info and prevents unnecessary verbosity.
3. (optional) `width` and `height`: can help reserve space for the image before it loads to help prevent layout shifts.

___



**Have I used Tailwind? What do I like about it? (The job info mentioned it specifically as an advantage)**

* Yes, I have hands-on experience with Tailwind. I appreciate that it's a utility-first CSS framework meaning it's highly customizable. 
  * The utility classes can be customized to fit the specific design needs of a project. The base classes provided by Tailwind are plenty and are easily extended or overwritten.
  * Responsive design is simplified via classes for different screen sizes.
  * Can reduce reliance on JS for some interactivity.


___

**What is the difference between var, let and const?**

* var is function-scoped, allowing it to be used anywhere within the function it's defined. On the other hand, let and const are block-scoped, confined to the nearest set of curly braces.

* var allows reassignment using the same variable name without throwing an error. In contrast, let and const do not allow redeclaration within the same scope.

* It's generally recommended to use let for variables that might be reassigned and const for constants that shouldn't be reassigned. The use of var is discouraged due to its broader scope, which can lead to unintended errors in more complex code."

___

**What is the difference between a regular and an arrow function?**

Arrow functions, introduced in ES6, provide a more concise syntax for writing functions. One significant distinction between regular functions and arrow functions is how they handle the `this` keyword.

Arrow functions do not create their own `this` context; instead, they inherit the value of `this` from their surrounding scope. This behavior makes arrow functions particularly useful in situations where you want to maintain the context of `this` from the enclosing function or object.

On the other hand, regular functions create their own `this` context, which can lead to different behavior, especially when used within certain callbacks or event handlers.


___

**What is the difference between null and undefined?**

null is a value that developers can assign to a variable to signify the intentional absence of a value. It's important to check for null using the strict equality operator (===), as using the loose equality operator (==) can lead to unexpected results, such as false positives in comparisons with undefined.

On the other hand, undefined signifies that a variable has been declared but has not been assigned any value, or that a value is unknown. It is the default value for uninitialized variables. Like null, it should be checked using the strict equality operator (===) to avoid potential issues with the loose equality operator (==).

In summary, while null is explicitly assigned by developers, undefined is the default state for variables that haven't been initialized or have an unknown value. Both should be checked with the strict equality operator for accurate comparisons.

___


**What JS frameworks am I familiar with?**

I am familiar with React/MERN and I've also recently began to teach myself Next.js. Since recent trends in the industry indicate that clients who seek web application services are increasingly benefiting from more than just the SPAs that React is known for, Next.js seems to be a new popular framework that leverages the power of React in a more cohesive way.


___

**What are IIFE? Why might we use them?**

* IIFE stands for **Immediately Invoked Function Expression**. It's a JS function that's defined and executed immediately after created.

* IIFE allows you to create a private scope for your variables. Those defined inside the IIFE aren't accessible from outside. Because of this, you can use IIFE to prevent naming conflicts with other scripts/libraries

* It's often used as a basis for creating modular code, allowing you to organize your code into self-contained modules

EX.

// Without IIFE (global variable)
var globalVar = "I am global";

// With IIFE (no global variable)
(function() {
  var localVar = "I am local";
  console.log(globalVar); // Accessible
})();

console.log(localVar); // Error! localVar is not defined

___

What is a .gitignore file? What big folder usually goes into it?

* A .gitignore file is used to specify files and directories that Git should ignore during version control. One commonly ignored directory is node_modules, which typically contains a large number of files related to Node.js dependencies. Using a .gitignore file helps keep repositories clean and avoids unnecessary inclusion of files that are generated or not essential for version control.
