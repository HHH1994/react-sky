import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

const Icon = React.lazy(() => import('./pages/icon/index'));
const Button = React.lazy(() => import('./pages/button/index'));
const Alert = React.lazy(() => import('./pages/alert/index'));
const Toast = React.lazy(() => import('./pages/toast/index'));


const RouteConfig = (
  <HashRouter>
    <Switch>
      <React.Suspense fallback={<div>吕肥肥在奔跑...</div>}>
        <Route exact path='/icon' component={Icon} />
        <Route exact path='/button' component={Button} />
        <Route exact path='/alert' component={Alert} />
        <Route exact path='/toast' component={Toast} />
      </React.Suspense>
    </Switch>
  </HashRouter>
);

export default RouteConfig;