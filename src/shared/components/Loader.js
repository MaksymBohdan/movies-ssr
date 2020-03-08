import React from 'react';

const Loader = ({ isLoading, children }) =>
  isLoading ? <h1>Loading</h1> : children;

export default Loader;
