export const actionTypes = {
  SET_FAVORITE_BY_ID: 'SET_FAVORITE_BY_ID',
  REMOVE_FAVORITE_BY_ID: 'REMOVE_FAVORITE_BY_ID',
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
        cache: {
          ...state.cache,
          [action.data.endpoint]: action.data.data,
        },
      };
    case actionTypes.SET_FAVORITE_BY_ID:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          [action.data.id]: true,
        },               
      };
    case actionTypes.REMOVE_FAVORITE_BY_ID:
        return {
          ...state,
          favorites: {
            ...state.favorites,
            [action.data.id]: false,
          },               
        };  
    default:
      return state;
  }
};
