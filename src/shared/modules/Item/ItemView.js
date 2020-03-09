import React from 'react';
import parse from 'html-react-parser';
import Loader from '../../components/Loader';
import { Lable, ItemWrapper } from './styles';

const ItemView = ({ item, loading }) => {
  const { name, image, summary } = item || {};

  return (
    <Loader isLoading={loading}>
      {item && Object.keys(item).length === 0 && (
        <h1>There is nothing to show</h1>
      )}
      {item && (
        <ItemWrapper>
          <Lable>Name: {name}</Lable>
          <img alt="logo" src={image && image.medium} />
          <div>Summary: {parse(summary)}</div>
        </ItemWrapper>
      )}
    </Loader>
  );
};

export default ItemView;
