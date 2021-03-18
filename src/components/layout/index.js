import React from 'react';
import Header from './Header';
import Wrapper from './styles';

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header></Header>
      {children}
    </Wrapper>
  );
};

export default Layout;
