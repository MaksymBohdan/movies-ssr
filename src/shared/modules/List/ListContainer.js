import React from 'react';
import { fetchMovies } from '../../services';
import ListView from './ListView';
import useFetch from '../../hooks/useFetch';

const ListContainer = props => {
  const {
    match: {
      params: { dynamic },
    },
    staticContext,
  } = props;

  const [data, loading] = useFetch(dynamic, staticContext, fetchMovies);

  return <ListView error={false} loading={loading} list={data} />;
};

export default ListContainer;
