import * as React from 'react';
import PageList from './pageList';
import Content from './content';
import { HashRouter } from 'react-router-dom';

import './index.styl';
import router from './router';

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
