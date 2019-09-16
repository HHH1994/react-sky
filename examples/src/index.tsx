import * as React from 'react';
import * as ReactDOM from 'react-dom';
import router from './router';

function App() {
  return (
    <div>
      {router}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));