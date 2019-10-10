import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

if (process.env.NODE_ENV == 'production') {
  window.server = 'https://lvpangpang.github.io/react-sky/demos/dist/index.html#/';
} else {
  window.server = 'http://127.0.0.1:8081#/';
}
ReactDOM.render(
  <App />, 
  document.getElementById('app')
);