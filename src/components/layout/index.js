import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Wrapper from './styles';

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header></Header>
      {children}
      <Footer></Footer>
    </Wrapper>
  );
};

export default Layout;
