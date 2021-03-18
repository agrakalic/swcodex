import React from 'react';
import PropTypes from 'prop-types';
import { getIdFromUrl } from '../../../utils';
import { ListItem } from '../';
import Wrapper from './styles';

const List = ({ characters }) => {
  return (
    <Wrapper>
      {characters.map((character) => {
        const id = getIdFromUrl(character.url);
        return <ListItem character={character} id={id} key={id} />;
      })}
    </Wrapper>
  );
};

List.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default List;
