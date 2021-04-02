import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useFavorites } from '../../../hooks';
import { Context } from '../../../context';
import Wrapper from './styles';

const Favorite = ({ id }) => {
  const { addToFavorites, isFavorite, removeFromFavorites } = useFavorites();
  const _isFavorite = isFavorite(id);
  const context = useContext(Context);
  const favorites = context.getFavorites();

  const [changed, setChanged] = useState(false);
  const [active, setActive] = useState(_isFavorite);

  useEffect(() => {
    changed && localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites[id]]);

  const handleFavoriteClick = (e, id) => {
    e.stopPropagation();
    active ? removeFromFavorites(id) : addToFavorites(id);
    setActive(!active);
    setChanged(true);
  };

  return (
    id !== '' && (
      <Wrapper
        className={active && 'active'}
        onClick={(e) => handleFavoriteClick(e, id)}
        title={active ? 'Remove from favorites' : 'Add to favorites'}
      >
        <svg
          viewBox='0 0 512 512'
          aria-hidden='true'
          focusable='false'
          role='img'
        >
          <path
            fill='currentColor'
            d='m494 185c0 4-3 9-8 14l-103 101 24 143c0 1 0 3 0 5 0 4-1 8-3 10-2 3-4 5-8 5-4 0-8-2-12-4l-128-67-128 67c-4 2-8 4-12 4-4 0-7-2-9-5-2-2-3-6-3-10 0-1 0-3 1-5l24-143-104-101c-4-6-7-10-7-14 0-7 6-12 16-13l144-21 64-130c4-8 8-12 14-12 6 0 10 4 14 12l64 130 144 21c10 1 16 6 16 13z'
          ></path>
        </svg>
      </Wrapper>
    )
  );
};

Favorite.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Favorite;
