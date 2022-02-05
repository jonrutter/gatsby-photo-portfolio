import React from 'react';

import { GlobalStyles } from './globalStyles';
import { Wrapper, Content } from './Layout.styles';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Content>
          <Header />
          {children}
          <Footer />
        </Content>
      </Wrapper>
    </>
  );
};

export default Layout;
