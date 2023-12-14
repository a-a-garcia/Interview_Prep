---
id: 3waybmqezjnv9bybomcun0k
title: Mock Interview
desc: ''
updated: 1702522690926
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
1. The browser initiates a Domain Name System (DNS) lookup to translate the human-readable domain (e.g. www.example.com) into an IP address.
2. Once the IP address is obtained, the browser sends an HTTP or HTTPS request to the web server associated with that IP address.
3. The web server processes the request and will retrieve HTML, CSS, JS and any other assets.
4. If it's an HTTPS request, a secure connection is established through a process called the TLS/SSL handshake which ensures encrypted communcation between the browser and the server
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

What do I know about HTML headings?

What HTML tag would I use for selecting the quantity of a product in a shopping cart?

What is CSS specificity?

What are the ways of selecting colors in CSS? What color is #0000ff?

What is the difference between absolute and relative units in CSS?

What is the difference between em and rem?

What is the difference between inline and block elements? Is <img> inline or block? Can we put block elements inside of inline elements?

What is the <img> tag consisted of? What do we put in the "alt" attribute if the image is decorative?

Have I used Tailwind? What do I like about it? (The job info mentioned it specifically as an advantage)

What is the difference between var, let and const?

What is the difference between a regular and an arrow function?

What is the difference between null and undefined?

What JS frameworks am I familiar with?

What are IIFE? Why might we use them?

What is a .gitignore file? What big folder usually goes into it?