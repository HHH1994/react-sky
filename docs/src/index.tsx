import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';


console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV == 'development') {
  window.server = 'http://127.0.0.1:8081#/';
} else {
  window.server = 'https://lvpangpang.github.io/react-sky/demos/dist/index.html#/';
}  
ReactDOM.render(
  <App />, 
  document.getElementById('app')
);