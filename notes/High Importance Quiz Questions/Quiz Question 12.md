---
id: 7fp3n9uelrg7z60ufd694fe
title: Quiz Question 12
desc: ''
updated: 1702408308720
created: 1702407606169
---
**#12: Describe the difference between a cookie, `sessionStorage` and `localStorage`.**

**1st Blind Answer:** No idea!

**Correct Answer**:

* **Local storage** is useful for storing data that the user will need to access later, such as offline data, because it stores the data in the browser and the system. This data will persist, even if the user closes and reopens the browser.

* **Session storage** stores data locally on the browser, but is specific to (and only accessible by) the respective site/browser tab, and is only available while the user is on the site/tab. This is a more secure storage method, due to restrictive access. Promotes better site performance due to reduced data transfer between server and client.

* **Cookies** are a good choice for storing data that should not be persisted for a long time, such as session IDs. Cookies allow you to set an expiry time at which point it would be deleted. Cookies can only be smaller sized data compared to the other two storage methods.

__What's the similarities?__

They are all:

* Storage mechanisms on the client side. This means the clients can read and modify the values.

* Key-value based storage.

* They are only able to store values as strings. Objects will have to be serialized into a string (`JSON.stringify()`) in order to be stored.

__What's the differences?__

* Initiator?
    * Cookie : Client or server. Server can use `Set-Cookie` header
    * `localStorage` : Client
    * `sessionStorage`: Client

* Expiry?
    * Cookie : Manually Set
    * `localStorage` : Forever (doesn't expire)
    * `sessionStorage`: On tab close

* Persistent across browser sessions?
    * Cookie : Depends, on whether expiration is sset
    * `localStorage` : Yes
    * `sessionStorage`: No

* Sent to server with every HTTP request?
    * Cookie : They are automatically being set via `Cookie` header
    * `localStorage` : No
    * `sessionStorage`: No

* Capacity (per domain)?
    * Cookie : 4kb (small)
    * `localStorage` : 5MB
    * `sessionStorage`: 5MB
    
* Access?
    * Cookie : Any window
    * `localStorage` : Any window
    * `sessionStorage`: Same tab

NOTE: There are also other client-side storage mechanisms like IndexedDB which is more powerful than the above-mentioned technologies but more complicated to use.

______

ADDITIONAL INFO:

When building a full-stack CRUD (Create, Read, Update, Delete) app, you have several options for managing client-side data using technologies like local storage, session storage, and cookies. Each of these has its own use cases and considerations. Here's a brief overview of how you might use each one in the context of an e-commerce site:

Local Storage:
Purpose: Local storage is designed to store data persistently across browser sessions. It's typically used for data that doesn't need to be cleared frequently.
Use Case: You might use local storage to store user preferences, shopping cart items, or other non-sensitive information that should persist even if the user closes and reopens the browser.
Considerations: Keep in mind that local storage has a size limit (typically around 5 MB per domain), and the data stored is accessible to both the client-side JavaScript and the user.
javascript
Copy code
// Storing data in local storage
localStorage.setItem('cartItems', JSON.stringify(cartItems));

// Retrieving data from local storage
const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
Session Storage:
Purpose: Session storage is similar to local storage but is scoped to a session. Data is cleared when the session ends (when the user closes the browser or tab).
Use Case: Use session storage for temporary data that you only need during the user's current session, such as maintaining state across multiple pages.
Considerations: Like local storage, session storage has a size limit, and the data is accessible to both client-side JavaScript and the user.
javascript
Copy code
// Storing data in session storage
sessionStorage.setItem('userPreferences', JSON.stringify(userPreferences));

// Retrieving data from session storage
const storedUserPreferences = JSON.parse(sessionStorage.getItem('userPreferences'));
Cookies:
Purpose: Cookies are small pieces of data sent from a server and stored on the client's machine. They have expiration dates and can be set to persist across sessions.
Use Case: Cookies are commonly used for authentication tokens, maintaining user sessions, and storing small pieces of data that need to be sent with each HTTP request.
Considerations: Cookies are limited in size (usually a few KB), and they are sent to the server with every request, so avoid storing large amounts of data. Additionally, be mindful of security considerations, such as securing sensitive data and setting appropriate cookie attributes.
javascript
Copy code
// Setting a cookie
document.cookie = 'username=John Doe; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/';

// Retrieving cookies
const cookies = document.cookie.split(';');
Choose the storage mechanism based on your specific requirements. For an e-commerce site, you might use a combination of local storage or session storage for user preferences and cart items, and cookies for user authentication and session management. Always consider security implications and be mindful of the type and amount of data you store on the client side.