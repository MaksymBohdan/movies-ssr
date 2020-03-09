import React from 'react';
import loadable from '@loadable/component';
import { Route, Switch } from 'react-router-dom';
import * as ROUTES from '../helpers/constants';

const MainContainer = loadable(() => import('./../modules/Main/MainContainer'));
const ListContainer = loadable(() => import('./../modules/List/ListContainer'));
const ItemContainer = loadable(() => import('./../modules/Item/ItemContainer'));
const NotFound = loadable(() => import('./NotFound'));

const App = () => {
  return (
    <>
      <Switch>
        <Route path={ROUTES.MAIN} exact component={MainContainer} />
        <Route path={ROUTES.LIST} component={ListContainer} />
        <Route path={ROUTES.ITEM} component={ItemContainer} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
