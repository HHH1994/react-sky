import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var MarkdownIt = require('markdown-it');
window.md = new MarkdownIt({ html: true });

ReactDOM.render(<App />, document.getElementById('app'));