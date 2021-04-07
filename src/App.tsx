import './App.css';

import React, { useEffect, useState } from 'react';

import { useLog } from './services';

const logo = './assets/logo.svg';

interface AppProps {}

function App({}: AppProps) {
  const [count, setCount] = useState(0);
  const { log, cls } = useLog();

  useEffect(() => {
    cls();
    log('Hello World!');
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
