# React-Web-Worker
An example solution to demonstrate using a Web Worker to fetch, parse, and store data in a React App

In the past I have been involved in projects that fetch large amounts of data from the server, parse it to client side entities, and store it in a Redux store. The inclusion of Web Workers to do this work for us was absolutely required to maintain a responsive application and to avoid blocking the single JavaScript thread running the React Application.

In order to achieve this, we must use a promised based mechanism to ask the worker to perform the work, then allow us to do something with the data when the web worker completes it's task.

Another important thing to bear in mind is that Web Workers are COMPLETELY seperate applications to your React Application, so have zero context of where the instruction has come from; this effectively means you're not able to access information in your React App from your Worker.

To encourage code reuse, we can use a 'worker-loader' in Webpack to create our Web Worker bundles using our code base alongside our React App bundle. This means you can also 'import' and reuse existing functions in your codebase in your Web Worker files.

https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers
