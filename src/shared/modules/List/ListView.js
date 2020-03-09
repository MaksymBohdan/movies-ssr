import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import { ITEM_STATIC } from '../../helpers/constants';
import { StyledList, StyledItem, StyledGenres } from './styles';

const ListView = ({ list, loading }) => (
  <Loader isLoading={loading}>
    <StyledList>
      {list && list.length === 0 && <h1>There is nothing to show</h1>}
      {list &&
        list.map(
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
);

export default ListView;
