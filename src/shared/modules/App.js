import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainContainer from '../modules/Main/MainContainer';
import ListContainer from '../modules/List/ListContainer';
import ItemContainer from '../modules/Item/ItemContainer';
import NotFound from './NotFound';
import * as ROUTES from '../helpers/constants';

const App = () => (
  <>
    <Switch>
      <Route path={ROUTES.MAIN} exact component={MainContainer} />
      <Route path={ROUTES.LIST} component={ListContainer} />
      <Route path={ROUTES.ITEM} component={ItemContainer} />
      <Route component={NotFound} />
    </Switch>
  </>
);

export default App;
