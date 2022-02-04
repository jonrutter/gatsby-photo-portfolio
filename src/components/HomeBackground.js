import React from 'react';
import styled from 'styled-components';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';

import { useHomeBackgroundQuery } from '../hooks/useHomeBackgroundQuery';

const Wrapper = styled.div`
  ${
    '' /* background: url(${({ background }) => background}) no-repeat fixed
      center/cover,
    #ffffff; */
  }
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
  max-width: 100vw;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeBackground = ({ children }) => {
  const data = useHomeBackgroundQuery();
  const backgroundImage = getImage(data.wpPage.Home_Page.background.localFile);

  return (
    <Wrapper>
      <BgImage
        image={backgroundImage}
        style={{ height: '100%', width: '100%' }}
        loading="eager"
      >
        <Content>{children}</Content>
      </BgImage>
    </Wrapper>
  );
};

export default HomeBackground;
