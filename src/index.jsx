
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

render(<AppContainer><App/></AppContainer>, document.querySelector("#app"));

if (module.hot) {
  module.hot.accept();
  console.log("index.jsx HMR");
  const App = require('./app').default;
  render(<AppContainer><App/></AppContainer>,document.querySelector("#app"));
}