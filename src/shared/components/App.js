import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainContainer from '../modules/Main/MainContainer';
import List from '../modules/List';
import Item from '../modules/Item';
import NotFound from './NotFound';
import * as ROUTES from '../helpers/constants';

const App = () => {
  return (
    <>
      <p>Hello app</p>
      <Switch>
        <Route path={ROUTES.MAIN} exact component={MainContainer} />
        <Route path={ROUTES.LIST} componen={List} />
        <Route path={ROUTES.ITEM} componen={Item} />
        <Route componen={NotFound} />
      </Switch>
    </>
  );
};

export default App;
