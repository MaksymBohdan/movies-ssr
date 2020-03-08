export const endpointAll = (search = 'batman') =>
  `http://api.tvmaze.com/search/shows?q=${search}`;

export const endpointId = id =>
  `http://api.tvmaze.com/lookup/shows?thetvdb=${id}`;
