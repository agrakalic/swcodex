export const actionTypes = {
  SET_FAVORITES: 'SET_FAVORITES',
  SET_CACHE: 'SET_CACHE',
};

export const initialState = {
  cache: {},
  favorites: JSON.parse(localStorage.getItem('favorites')) || {},    
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_CACHE:
      return {
        ...state,
        cache: action.data.cache,
      };
    case actionTypes.SET_FAVORITES:
      localStorage.setItem('favorites', JSON.stringify(action.data.favorites));
      console.log(localStorage.getItem('favorites'));
      return {
        ...state,
        favorites: action.data.favorites,
      };
    default:
      return state;
  }
};
