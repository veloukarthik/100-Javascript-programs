1.what is node js?
- Node js is a server-side javascript runtime environment that allows developers to run javascript code on the server.
- It is built on the V8 engine, which is the same engine that powers google chrome.

2.Define event loop?
- Event loop handles asynchronous operations in node js. It process callbacks after non-blocking I/O operations, to ensuring that the applications can handle
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

6. what is difference between process.nextTick() and setImmediate()?
- process.nextTick is runs callback immediately after the current operation, but before any I/O events, while setImmediate runs after I/O events in the
next iteration of the event loop.
- process.nextTick is used for immediate execution, while setImmediate is used for scheduling execution after the current operation.

7.what is event emitter?
- Event emitter is a core module in node js that provides a way to emit events and handle them.
- It is used to create custom events and handle them in a decoupled manner.
- It is used to handle events in a non-blocking way, allowing the application to continue executing other tasks while waiting for events to be handled.

8.what is cluster?
- Cluster is a module in node js that allows you to create multiple instances of a node js application to take advantage of multi-core systems.
- It enables you to run multiple instances of a node js application on a single machine, which can improve performance and scalability.
- It is used to handle multiple requests simultaneously and distribute the workload across multiple CPU cores.

9.what is worker thread?
- Worker threads are a way to run multiple JavaScript scripts in parallel within a single Node.js process.
- They are used to offload CPU-intensive tasks from the main thread, allowing the main thread to continue executing other tasks.
- Worker threads are created using the Worker constructor, which takes a filename or a string of JavaScript code as an argument.
- They can communicate with each other using postMessage and onmessage methods.

10.what is event worker pool?
- Event worker pool is a module in node js that allows you to create a pool of worker threads to handle events in a non-blocking way.
- It is used to handle events in a more efficient and scalable way, by offloading the processing of events to worker threads.
- It is used to handle multiple events simultaneously and distribute the workload across multiple worker threads.

11.Differences between spawn() and fork()?
- spawn is used to create a new process
- fork is used to create a new process that is a child of the current process.
- spawn is used to create a new process that is not a child of the current process.

12. What is event bubbling?
- Event bubbling is the concept where an event starts from the deepest element (the target) and propagates upwards through its ancestors in the 
DOM tree until it reaches the root.
<code>
<pre>
<!-- html code -->
<div id="parent" style="padding: 20px; background-color: lightblue;">
  Parent
  <div id="child" style="padding: 20px; background-color: lightgreen;">
    Child
  </div>
</div>
<!-- Scriptcode -->
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});
</pre>
</code>

13. What is event delegation?
- Event delegation is a technique where you attach a single event listener to a parent element to handle events for its child elements. 
- It leverages event bubbling to capture events triggered by child elements.
<code>
<!-- html code -->
<pre>
<ul id="list" style="padding: 10px; background-color: lightgray;">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
<!-- scriptcode -->
document.getElementById("list").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(`You clicked on ${event.target.textContent}`);
  }
});
</pre>
</code>

14. What is prototype?
- Every javascript object has a prototype, which is also an object.
- A prototype object acts as a blueprint from which other objects inherit properties and methods. 
- The prototype property is fundamental to JavaScript’s inheritance model.

15. What is this keyword in JavaScript?
- In Javascript this keyword refers to global scope.
- In a function this keyword refers to the global object.
- In an event, this keyword refers to the element that received the event.
- In a method, this keyword refers to the method that is called.

16. what is difference between apply, call and bind?
- In JavaScript, the call, apply, and bind methods are used to control the invocation of the method.
- The call method is invokes a function with a given this value and arguments provided one by one.
- The apply method is invokes a function with a given this value and arguments provided as an array.
- In bind method, Returns a new function with a given this value and preset arguments, but doesn’t invoke it immediately.

17. Define generator function?
- Generator functions allow you to define an iterative algorithm by writing a function that can pause execution (yield) and resume later. 
- They are declared using the function* syntax and produce values one at a time.

18. what is currying function?
- Currying is a technique of transforming a function that takes multiple arguments into a series of functions, each taking one argument at a time. 
- For example, a function f(a, b) can be converted to f(a)(b)