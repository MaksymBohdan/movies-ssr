import fetch from 'isomorphic-fetch';
import { endpointAll, endpointId } from '../helpers/endpoints';

const fetcher = (endpoint, query) =>
  fetch(endpoint(query))
    .then(data => data.json())
    .then(movies => movies)
    .catch(error => {
      // eslint-disable-next-line no-console
      console.warn(error);
      return error;
    });

export const fetchMovies = query => fetcher(endpointAll, query);
export const fetchMovieById = id => fetcher(endpointId, id);
