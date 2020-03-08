import React, { useEffect, useState } from 'react';
import getLocalProps from '../../utils';
import fetchMovies from '../../services';
import ListView from './ListView';

const ListContainer = props => {
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);

  const fetchDataFromClient = async ({ dynamic }) => {
    try {
      const data = await fetchMovies(dynamic);
      setList(data);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    const data = getLocalProps(props);

    if (data) setList(data);
    if (!data) fetchDataFromClient(props.match.params);
  }, [props]);

  return <ListView error={error} list={list} />;
};

export default ListContainer;
