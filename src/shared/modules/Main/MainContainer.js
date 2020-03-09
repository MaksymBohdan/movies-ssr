import React, { useState, useEffect } from 'react';
import MainView from './MainView';
import { LIST_STATIC } from '../../helpers/constants';
import Loader from '../../components/Loader';

const MainContainer = props => {
  const { history } = props;
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // to prevent showing comp with no css
    setIsLoading(false);
  }, []);

  const handleChange = e => setValue(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    history.push(`${LIST_STATIC}/${value}`);
  };

  return (
    <Loader isLoading={isLoading}>
      <MainView onChange={handleChange} onSubmit={handleSubmit} value={value} />
    </Loader>
  );
};

export default MainContainer;
