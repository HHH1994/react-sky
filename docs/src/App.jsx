import React from 'react';
import PageList from './pageList';
import Content from './content.jsx';
import { HashRouter, Route, Switch } from 'react-router-dom';

import './index.styl';
import router from './router.js';

function App (props) {
  return (
    <React.Fragment>
      <HashRouter>
        <PageList></PageList>
        <Content>
          {router}
        </Content>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
