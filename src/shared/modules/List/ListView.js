import React from 'react';
import { Link } from 'react-router-dom';

import { StyledList, StyledItem, StyledGenres } from './styles';
import { ITEM_STATIC } from '../../helpers/constants';
import Loader from '../../components/Loader';
import ErrorHandler from '../../components/ErrorHandler';

const ListView = ({ list, error }) => (
  <ErrorHandler isError={error}>
    <Loader isLoading={!list.length}>
      <StyledList>
        {list.map(({ show: { id, name, image, genres } }) => (
          <Link key={id} to={`${ITEM_STATIC}/${id}`}>
            <StyledItem>
              <div>
                <p>{name}</p>
                <img alt="logo" src={image.medium} />
                <StyledGenres>
                  {genres.map(genre => (
                    <li key={genre}>{genre}</li>
                  ))}
                </StyledGenres>
              </div>
            </StyledItem>
          </Link>
        ))}
      </StyledList>
    </Loader>
  </ErrorHandler>
);

export default ListView;
