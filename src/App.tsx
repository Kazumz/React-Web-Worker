import React from 'react';

import DedicatedWorker from './WebWorkers/Workers/dedicated-worker-example.worker';
import createWorker from './WebWorkers/worker-utils';
import IExampleInterface from './Interfaces/IExampleInterface';
import logo from './logo.svg';

import './App.css';

const App: React.FC = () => {
  React.useEffect(
    () => {
      // Instantiate the Web Worker.
      const worker = createWorker<{}, ReadonlyArray<IExampleInterface>>(DedicatedWorker);

      // Fire the promise in the Web Worker and hook in to .then().
      // Check Chrome Dev Tools > Sources for the running worker.
      worker.perform()
        .then(data => {
          console.log(JSON.stringify(data));

          // We could introduce a wrapper function here to do this for us.
          // But I think leaving this here adds to the example's flow
          // and makes it a bit more understandable as to what's happening here.
          worker.terminate();
        });
    },
    []
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
