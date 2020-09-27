import React from 'react';

import PokemonWorker from './WebWorkers/Workers/pokemon.worker';
import createWorker from './WebWorkers/worker-utils';
import IPokemon from './Interfaces/IPokemon';
import logo from './logo.svg';

import './App.css';

const App: React.FC = () => {
  React.useEffect(
    () => {
      // Instantiate the Web Worker.
      const worker = createWorker<{}, ReadonlyArray<IPokemon>>(PokemonWorker);

      // Fire the promise in the Web Worker and hook in to .then().
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
