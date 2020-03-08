import React from 'react';

const ErrorHandler = ({ isError, children }) =>
  isError ? <h1>Error try again</h1> : children;

export default ErrorHandler;
