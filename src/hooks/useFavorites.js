import { useContext } from 'react';
import { Context } from '../context';

const useFavorites = () => {
  const context = useContext(Context);
  const favorites = context.getFavorites();
 
  const addToFavorites = (id) => {
    context.setFavoriteById(id);
  };

  const removeFromFavorites = (id) => {
    context.removeFavoriteById(id);    
  };

  const isFavorite = (id) => {
    return favorites[id] || false;
  };
  
  return {
    addToFavorites,
    isFavorite,
    removeFromFavorites,
  };
};

export default useFavorites;
