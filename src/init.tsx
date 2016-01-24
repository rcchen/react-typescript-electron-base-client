import React = require('react');
import ReactDOM = require('react-dom');

import { AppRouter } from './router';

document.addEventListener('DOMContentLoaded', (event) => {
  const container = document.createElement('div');
  ReactDOM.render(<AppRouter />, container);
  document.body.appendChild(container);
});
