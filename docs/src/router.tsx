import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

const Button = React.lazy(() => import('./pages/button/index'));

const RouteConfig = (
  <HashRouter>
    <Switch>
      <React.Suspense fallback={<div>吕肥肥在奔跑...</div>}>
        <Route exact path='/button' component={Button} />
      </React.Suspense>
    </Switch>
  </HashRouter>
);

export default RouteConfig;