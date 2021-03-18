import React from 'react';
import PropTypes from 'prop-types';
import { useFetch } from '../../../hooks';
import config from '../../../config';

const CharacterName = ({ id }) => {  
  const endpoint = `${process.env.REACT_APP_API_URL}${config.endpoints.characters}/${id}/`;
  const { data } = useFetch(endpoint);  

  return (
    <>
      {data && data.name}
    </>
  );
};

CharacterName.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CharacterName;