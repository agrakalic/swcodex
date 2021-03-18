import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { paths } from '../../../constants';
import { Favorite, Homeworld } from '../';
import { H2, P } from '../../../ui/typography';
import { Box } from '../../../ui/containers';

const ListItem = ({ character, id }) => {
  const history = useHistory();
  
  const handleBoxClick = (e, id) => {
    const url = paths.CHARACTER.replace(':id', id);
    history.push(url);
  };

  return (
    <Box
      className='list-item'
      onClick={(e) => handleBoxClick(e, id)}
    >
      <span className='list-item__avatar'></span>
      <div className='list-item__details'>
        <H2 className='list-item__title'>{character.name}</H2>
        <P className='list-item__homeworld'>
          <Homeworld url={character.homeworld} />
        </P>
      </div>
      <div className='list-item__favorite'>
        <Favorite id={id} />
      </div>
    </Box>
  );
};

ListItem.propTypes = {
  character: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};

export default ListItem;
