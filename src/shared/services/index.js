import fetch from 'isomorphic-fetch';

const URL = (search = 'batman') =>
  `http://api.tvmaze.com/search/shows?q=${search}`;

const fetchMovies = (movie = 'all') => {
  return fetch(URL(movie))
    .then(data => data.json())
    .then(movies => movies)
    .catch(error => {
      // eslint-disable-next-line no-console
      console.warn(error);
      return null;
    });
};

export default fetchMovies;
