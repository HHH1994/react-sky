import React, { Suspense, lazy } from 'react';
import { HashRouter, Route,  Switch } from 'react-router-dom';

const Button = React.lazy(() => import('./pages/button/index'));
const Button1 = React.lazy(() => import('./pages/button1/index'));


const RouteConfig = (
  <HashRouter>
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path='/' component={Button} />
        <Route exact path='/botton1' component={Button1} />
      </Suspense>
    </Switch>
  </HashRouter>
);

export default RouteConfig;