import React from 'react';
import { StaticRouter } from 'react-router-dom';
import App from './App';

const ServerRouter = ({ context = {}, location }) => (
  <StaticRouter context={context} location={location}>
    <App />
  </StaticRouter>
);

export default ServerRouter;
