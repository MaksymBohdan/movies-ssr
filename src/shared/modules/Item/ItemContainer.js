import React from 'react';
import { fetchMovieById } from '../../services';
import ItemView from './ItemView';
import useFetch from '../../hooks/useFetch';

const ItemContainer = props => {
  const {
    match: {
      params: { dynamic },
    },
    staticContext,
  } = props;

  const [data, loading] = useFetch(dynamic, staticContext, fetchMovieById);

  return <ItemView item={data} error={false} loading={loading} />;
};

export default ItemContainer;
