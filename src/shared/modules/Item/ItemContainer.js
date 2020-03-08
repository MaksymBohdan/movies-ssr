import React, { useState, useEffect } from 'react';
import getLocalProps from '../../utils';
import { fetchMovieById } from '../../services';
import ItemView from './ItemView';

const ItemContainer = props => {
  const [item, setItem] = useState({});
  const [error, setError] = useState(false);

  const fetchDataFromClient = async ({ dynamic }) => {
    // check if there is no id in for the movie
    if (dynamic === 'null') setError(true);

    try {
      const data = await fetchMovieById(dynamic);
      setItem(data);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    const data = getLocalProps(props);

    if (data) setItem(data);
    if (!data) fetchDataFromClient(props.match.params);
  }, [props]);

  return <ItemView item={item} error={error} />;
};

export default ItemContainer;
