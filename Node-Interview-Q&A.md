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