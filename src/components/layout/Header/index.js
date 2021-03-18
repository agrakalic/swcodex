import React from 'react';
import { Link } from 'react-router-dom';
import { H1 } from '../../../ui/typography';
import { paths } from '../../../constants';

import Wrapper from './styles';

const Header = () => {
  return (
    <Wrapper>
      <H1 className='header__title'><Link to={paths.HOME}>Star Wars Codex</Link></H1>
    </Wrapper>
  );
};

export default Header;
