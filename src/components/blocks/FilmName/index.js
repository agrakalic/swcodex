import React from 'react';
import PropTypes from 'prop-types';
import { getIdFromUrl } from '../../../utils';
import { useFetch } from '../../../hooks';
import config from '../../../config';

const FilmName = ({ url }) => {
  const filmId = getIdFromUrl(url);
  const endpoint = `${process.env.REACT_APP_API_URL}${config.endpoints.films}/${filmId}/`;
  const { data } = useFetch(endpoint);  

  return (
    <>
      {data && data.title}
    </>
  );
};

FilmName.propTypes = {
  url: PropTypes.string.isRequired,
};

export default FilmName;