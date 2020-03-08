import React, { useState } from 'react';
import MainView from './MainView';
import { LIST_STATIC } from '../../helpers/constants';

const MainContainer = ({ history }) => {
  const [value, setValue] = useState('');

  const handleChange = e => setValue(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    history.push(`${LIST_STATIC}/${value}`);
  };

  return (
    <MainView onChange={handleChange} onSubmit={handleSubmit} value={value} />
  );
};

export default MainContainer;
