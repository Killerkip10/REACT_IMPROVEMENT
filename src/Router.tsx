import { Route, Switch, Redirect } from 'react-router-dom';

import { ROUTE } from 'configs';
import { NewsContainer } from 'pages/News';
import { UsersContainer } from 'pages/Users';

export function Router() {
  return (
    <Switch>
      <Route path={ROUTE.NEWS} component={NewsContainer} exact />
      <Route path={ROUTE.USERS} component={UsersContainer} exact />
      <Redirect from="/" to={ROUTE.NEWS} exact />
    </Switch>
  );
}
