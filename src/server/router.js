import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import ServerRouter from '../shared/components/ServerRouter';
import htmlTemplate from '../shared/helpers/template';
import * as ROUTES from '../shared/helpers/constants';

const router = express.Router();

router.get(ROUTES.MAIN, (req, res) => {
  const jsx = renderToString(<ServerRouter location={ROUTES.MAIN} />);

  res.send(htmlTemplate(jsx));
});

export default router;
