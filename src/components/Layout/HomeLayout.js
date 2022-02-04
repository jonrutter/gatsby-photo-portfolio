import React from 'react';

import { GlobalStyles } from './globalStyles';
import { Wrapper } from './Layout.styles';
import HomeBackground from '../HomeBackground';
import Nav from '../Nav';

const HomeLayout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <HomeBackground>
          <Nav home={true} />
          {children}
        </HomeBackground>
      </Wrapper>
    </>
  );
};

export default HomeLayout;
