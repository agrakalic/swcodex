import React from 'react';
import { useHistory } from 'react-router-dom';
import { getCharactersPath } from '../../../utils';

import { Button } from '../../../ui/forms';
import { Tagline, P } from '../../../ui/typography';
import Wrapper from './styles';

const Home = () => {
  const url = getCharactersPath();
  const history = useHistory();

  const handleClick = () => {
    history.push(url);
  };

  return (
    <Wrapper>
      <Tagline>Long time ago, in a galaxy far, far away... 
        there were many creatures that roamed the universe. Explore our database of all the characters 
        that appeared in the Star Wars saga.</Tagline>
      <P>
        <Button onClick={handleClick}>Browse the Characters</Button>
      </P>
    </Wrapper>
  );
};

export default Home;
