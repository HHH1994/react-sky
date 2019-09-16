import * as React from 'react';
import { HashRouter, Route,  Switch } from 'react-router-dom';

const Button = React.lazy(() => import('./pages/button/index'));
const Button1 = React.lazy(() => import('./pages/button1/index'));


const RouteConfig = (
  <HashRouter>
    <Switch>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Route exact path='/' component={Button} />
        <Route exact path='/button' component={Button1} />
      </React.Suspense>
    </Switch>
  </HashRouter>
);

export default RouteConfig;