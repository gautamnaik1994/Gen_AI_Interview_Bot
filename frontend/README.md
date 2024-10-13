# Sample Questions and Answers

## React Questions

## What is the Virtual DOM and how does it differ from the real DOM?

The Virtual DOM is a lightweight copy of the real DOM. It is a JavaScript object that represents the actual DOM elements. React uses the Virtual DOM to improve performance by updating the actual DOM only when necessary. When a component's state changes, React updates the Virtual DOM first and then compares it with the real DOM to identify the changes. This process is known as reconciliation.

## Explain the difference between functional components and class components in React?

Functional components are simple JavaScript functions that return JSX elements. They are also known as stateless components because they do not have state or lifecycle methods. Functional components are easier to read and test compared to class components. Class components, on the other hand, are ES6 classes that extend the React.Component class. They have state, lifecycle methods, and can hold local state. Class components are used when the component needs to have state or lifecycle methods.

## What are React Fragments and why are they useful?

React Fragments are a way to group multiple elements without adding extra nodes to the DOM. They allow you to return multiple elements from a component's render method without wrapping them in a div or other container element. Fragments are useful when you need to return multiple elements from a component but do not want to add extra nodes to the DOM.

## Explain the concept of lifting state up in React?

Lifting state up is a pattern in React where the state is moved from a child component to its parent component. This allows multiple child components to share the same state and synchronize their state with the parent component. Lifting state up is useful when multiple components need to access and update the same state, or when the state needs to be shared between sibling components.

## Node.js Questions

## What is the role of the event loop in Node.js?

The event loop is a core concept in Node.js that allows it to perform non-blocking I/O operations. It is responsible for handling asynchronous operations and callbacks in Node.js. The event loop continuously checks the call stack for new tasks and executes them in a non-blocking manner. This allows Node.js to handle multiple requests concurrently without blocking the main thread.

## What is the difference between asynchronous and synchronous programming in Node.js?

Asynchronous programming in Node.js allows multiple operations to be performed concurrently without blocking the main thread. Asynchronous functions return immediately and execute in the background, allowing other operations to continue. Synchronous programming, on the other hand, blocks the main thread until the operation is completed. This can lead to performance issues, especially in I/O-bound applications.

## Explain the role of the fs module in Node.js?

The fs module in Node.js provides file system-related functionality, such as reading and writing files, creating directories, and manipulating file metadata. It allows Node.js applications to interact with the file system and perform file-related operations. The fs module provides both synchronous and asynchronous methods for file I/O operations.

## What is the purpose of the cluster module in Node.js?

The cluster module in Node.js allows you to create child processes that share the same server port. This enables you to take advantage of multi-core systems and improve the performance of your Node.js applications. The cluster module allows you to create a cluster of processes that can handle incoming requests concurrently, distributing the workload across multiple CPU cores.
