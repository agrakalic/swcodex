import React, { useCallback, useReducer } from 'react';
import { actionTypes, initialState, reducer } from './reducer';

export const Context = React.createContext({});

export const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //

  const getCache = useCallback(() => state.cache, [state.cache]);

  const setCache = cache => {
    dispatch({
      type: actionTypes.SET_CACHE,
      data: {
        cache,
      },
    });
  };

  const getFavorites = useCallback(() => state.favorites, [state.favorites]);

  const setFavorites = favorites => {
    dispatch({
      type: actionTypes.SET_FAVORITES,
      data: {
        favorites,
      },
    });
  };

  //

  const utilities = {
    getCache, 
    setCache,
    getFavorites,
    setFavorites
  };

  return (
    <Context.Provider value={utilities}>{props.children}</Context.Provider>
  );
};
