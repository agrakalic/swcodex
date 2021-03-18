import React from 'react';
import PropTypes from 'prop-types';
import { getIdFromUrl } from '../../../utils';
import { useFetch } from '../../../hooks';
import config from '../../../config';

const Homeworld = ({ url }) => {
  const planetId = getIdFromUrl(url);
  const endpoint = `${process.env.REACT_APP_API_URL}${config.endpoints.planets}/${planetId}/`;
  const { data } = useFetch(endpoint);  

  return (
    <>
      {data && data.name}
    </>
  );
};

Homeworld.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Homeworld;