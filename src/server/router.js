import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import ServerRouter from '../shared/components/ServerRouter';
import htmlTemplate from '../shared/helpers/template';
import * as ROUTES from '../shared/helpers/constants';
import { fetchMovies, fetchMovieById } from '../shared/services/index';

const router = express.Router();

router
  .get(ROUTES.MAIN, (req, res) => {
    const jsx = renderToString(<ServerRouter location={ROUTES.MAIN} />);

    return res.send(htmlTemplate(jsx));
  })
  .get(ROUTES.LIST, async (req, res) => {
    const { dynamic } = req.params;
    let data;

    try {
      data = await fetchMovies(dynamic);
    } catch (err) {
      return res.status(500).send(err);
    }

    const jsx = renderToString(
      <ServerRouter location={ROUTES.LIST} context={{ data }} />,
    );

    return res.send(htmlTemplate(jsx, { data }));
  })
  .get(ROUTES.ITEM, async (req, res) => {
    const { dynamic } = req.params;
    let data;

    try {
      data = await fetchMovieById(dynamic);
    } catch (err) {
      return res.status(500).send(err);
    }

    const jsx = renderToString(
      <ServerRouter location={ROUTES.ITEM} context={{ data }} />,
    );

    return res.send(htmlTemplate(jsx, { data }));
  })
  .get('*', (req, res) => {
    const jsx = renderToString(<ServerRouter location="*" />);

    return res.send(htmlTemplate(jsx));
  });

export default router;
