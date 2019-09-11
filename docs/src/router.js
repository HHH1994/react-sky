import React, { Suspense, lazy } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

const Button = React.lazy(() => import('./pages/button/index'));

const RouteConfig = (
  <HashRouter>
    <Switch>
      <Suspense fallback={<div>吕肥肥在奔跑...</div>}>
        <Route exact path='/button' component={Button} />
      </Suspense>
    </Switch>
  </HashRouter>
);

export default RouteConfig;