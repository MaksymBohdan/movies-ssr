import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import ServerRouter from '../shared/components/ServerRouter';
import htmlTemplate from '../shared/helpers/template';
import * as ROUTES from '../shared/helpers/constants';
import fetchMovies from '../shared/services/index';

const router = express.Router();

router
  .get(ROUTES.MAIN, (req, res) => {
    const jsx = renderToString(<ServerRouter location={ROUTES.MAIN} />);

    res.send(htmlTemplate(jsx));
  })
  .get(ROUTES.LIST, async (req, res) => {
    const { dynamic } = req.params;
    let data;

    try {
      data = await fetchMovies(dynamic);
    } catch (err) {
      res.status(500).send(err);
    }

    const jsx = renderToString(
      <ServerRouter location={ROUTES.LIST} context={{ data }} />,
    );

    res.send(htmlTemplate(jsx, { data }));
  })
  .get('*', (req, res) => {
    const jsx = renderToString(<ServerRouter location="*" />);

    res.send(htmlTemplate(jsx));
  });

export default router;
