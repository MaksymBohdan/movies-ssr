import { useState, useEffect } from 'react';
import getLocalProps from '../utils';

const useFetch = (dynamic, staticContext, clientFetchFn) => {
  const [fetchedData, setFetchedData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDataFromClient = async id => {
    try {
      const data = await clientFetchFn(id);
      setFetchedData(data);
      setLoading(false);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  useEffect(() => {
    setLoading(true);
    const data = getLocalProps(staticContext);

    if (data) {
      setFetchedData(data);
      setLoading(false);
    }
    if (!data) fetchDataFromClient(dynamic);
  }, [dynamic]);

  return [fetchedData, loading];
};

export default useFetch;
