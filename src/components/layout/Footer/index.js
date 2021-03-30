import React from 'react';
import { useHistory } from 'react-router-dom';
import { getCharactersPath } from '../../../utils';

import { P } from '../../../ui/typography';
import { Button } from '../../../ui/forms';
import Wrapper from './styles';

const Footer = () => {
  const url = getCharactersPath();
  const history = useHistory();

  const handleClick = () => {
    history.push(url);
  };

  return (
    <Wrapper>      
      <P>
        <Button blank onClick={handleClick}>View All Characters</Button>
      </P>
    </Wrapper>
  );
};

export default Footer;
