import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getCharactersPath } from '../../../utils';

import { P } from '../../../ui/typography';
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
        <Link onClick={handleClick}>View All Characters</Link>
      </P>
    </Wrapper>
  );
};

export default Footer;
