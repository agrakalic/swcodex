import React from 'react';
import PropTypes from 'prop-types';
import { useFetch } from '../../../hooks';
import config from '../../../config';

const FilmTitle = ({ id }) => {  
  const endpoint = `${process.env.REACT_APP_API_URL}${config.endpoints.films}/${id}/`;
  const { data } = useFetch(endpoint);  

  return (
    <>
      {data && data.title}
    </>
  );
};

FilmTitle.propTypes = {
  id: PropTypes.string.isRequired,
};

export default FilmTitle;