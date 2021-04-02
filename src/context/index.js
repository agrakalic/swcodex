import React, { useCallback, useReducer } from 'react';
import { actionTypes, initialState, reducer } from './reducer';

export const Context = React.createContext({});

export const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //
  const getCache = useCallback(() => state.cache, [state.cache]);

  const setCache = (endpoint, data) => {
    dispatch({
      type: actionTypes.SET_CACHE,
      data: {
        endpoint,
        data,
      },
    });
  };

  const getFavorites = useCallback(() => state.favorites, [state.favorites]);

  const setFavoriteById = (id) => {
    dispatch({
      type: actionTypes.SET_FAVORITE_BY_ID,
      data: {
        id,
      },
    });
  };

  const removeFavoriteById = (id) => {
    dispatch({
      type: actionTypes.REMOVE_FAVORITE_BY_ID,
      data: {
        id,
      },
    });
  };

  //

  const utilities = {
    getCache,
    setCache,
    getFavorites,
    setFavoriteById,
    removeFavoriteById,
  };

  return (
    <Context.Provider value={utilities}>{props.children}</Context.Provider>
  );
};
