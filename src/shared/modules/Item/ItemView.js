import React from 'react';
import parse from 'html-react-parser';
import Loader from '../../components/Loader';
import ErrorHandler from '../../components/ErrorHandler';
import { Lable, ItemWrapper } from './styles';

const ItemView = ({ item, error }) => {
  const { name, image, summary } = item || {};

  return (
    <ErrorHandler isError={error}>
      <Loader isLoading={Object.keys(item).length === 0}>
        {Object.keys(item).length > 0 && (
          <ItemWrapper>
            <Lable>Name: {name}</Lable>
            <img alt="logo" src={image && image.medium} />
            <div>Summary: {parse(summary)}</div>
          </ItemWrapper>
        )}
      </Loader>
    </ErrorHandler>
  );
};

export default ItemView;
