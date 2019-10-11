import * as React from 'react';
import { HashRouter, Route,  Switch } from 'react-router-dom';
import IconDemo from './pages/icon/index.tsx';

const Button = React.lazy(() => import('./pages/button/index'));
const Alert = React.lazy(() => import('./pages/alert/index'));
// const Icon = React.lazy(() => import('./pages/icon/index'));

const RouteConfig = (
  <HashRouter>
    <Switch>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Route exact path='/' component={Button} />
        <Route exact path='/button' component={Button} />
        <Route exact path='/alert' component={Alert} />
        <Route exact path='/icon' component={IconDemo} />
      </React.Suspense>
    </Switch>
  </HashRouter>
);

export default RouteConfig;