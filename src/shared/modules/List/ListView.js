import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import ErrorHandler from '../../components/ErrorHandler';
import { ITEM_STATIC } from '../../helpers/constants';
import { StyledList, StyledItem, StyledGenres } from './styles';

const ListView = ({ list, error }) => (
  <ErrorHandler isError={error}>
    <Loader isLoading={!list.length}>
      <StyledList>
        {list.map(
          ({
            show: {
              id,
              name,
              image,
              genres,
              externals: { thetvdb },
            },
          }) => (
            <Link key={id} to={`${ITEM_STATIC}/${thetvdb}`}>
              <StyledItem>
                <p>{name}</p>
                <img alt="logo" src={image && image.medium} />
                <StyledGenres>
                  {genres.map(genre => (
                    <li key={genre}>{genre}</li>
                  ))}
                </StyledGenres>
              </StyledItem>
            </Link>
          ),
        )}
      </StyledList>
    </Loader>
  </ErrorHandler>
);

export default ListView;
