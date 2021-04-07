import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider, services } from './services';

ReactDOM.render(
  <React.StrictMode>
		<Provider value={services}>
			<App />
		</Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

import.meta.hot && import.meta.hot.accept();
