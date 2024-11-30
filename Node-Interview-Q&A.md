1.what is node js?
- Node js is a server-side javascript runtime environment that allows developers to run javascript code on the server.
- It is built on the V8 engine, which is the same engine that powers google chrome.

2.Define event loop?
- Event loop handles asynchronous operations in node js. It process callbacks after non-blocking operations, to ensuring that the applications can handle
multiple operations conucurrently without blocking main thread.
- It performs task like reading files or making HTTP requests without blocking the execution of other tasks.

3.What is callback hell?
- Callback hell is a situation where multiple nested callbacks are used in a program, making the code difficult to read and maintain.
- It occurs when a function is passed as an argument to another function, and the first function is called back within the second function.
- This can lead to a pyramid of doom, where the code becomes difficult to understand and debug.

4.What is callback?
- A callback is a function that is passed as an argument to another function and is called back later, usually after some operation has been completed.
- Callbacks are commonly used in asynchronous programming to handle the results of an operation.

5. what is promise?
- A promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
- Promises are used to handle asynchronous operations in a more readable and manageable way.
- It has three states: pending, fulfilled, and rejected.
- Promise results are managed by .then and .catch methods.

