import React from 'react';
import PropTypes from 'prop-types';
import { getIdFromUrl } from '../../../utils';
import { ListItem } from '../';

const List = ({ characters }) => {
  return (
    <>
      {characters.map((character) => {
        const id = getIdFromUrl(character.url);
        return <ListItem character={character} id={id} key={id} />;
      })}
    </>
  );
};

List.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default List;
