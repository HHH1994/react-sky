import * as React from 'react';
import { HashRouter, Route,  Switch } from 'react-router-dom';

const Button = React.lazy(() => import('./pages/button/index'));
const Alert = React.lazy(() => import('./pages/alert/index'));

const RouteConfig = (
  <HashRouter>
    <Switch>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Route exact path='/' component={Button} />
        <Route exact path='/button' component={Button} />
        <Route exact path='/alert' component={Alert} />
      </React.Suspense>
    </Switch>
  </HashRouter>
);

export default RouteConfig;