import { useContext } from 'react';
import { Context } from '../context';

const useFavorites = () => {
  const context = useContext(Context);
  const favorites = context.getFavorites();

  const addToFavorites = (id) => {    
    favorites[id] = "true";
    context.setFavorites(favorites);
  };

  const removeFromFavorites = (id) => {
    delete favorites[id];
    context.setFavorites(favorites);
  };

  const isFavorite = (id) => {
    return favorites[id] !== undefined;
  };

  return {
    addToFavorites,
    isFavorite,
    removeFromFavorites,
  };
};

export default useFavorites;
