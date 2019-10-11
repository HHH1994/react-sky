import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

if (process.env.NODE_ENV === 'production') {
  (window as any).serverName = 'https://lvpangpang.github.io/react-sky/demos/dist/index.html#';
} else {
  (window as any).serverName = 'http://127.0.0.1:8082#';
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);