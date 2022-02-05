import React from 'react';
import styled from 'styled-components';

import HomeLayout from '../components/Layout/HomeLayout';
import SEO from '../components/SEO';

const Wrapper = styled.main`
  padding: 1rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.25);
`;

const Title = styled.h1`
  padding: 0;
  font-size: 3rem;
  letter-spacing: 0.1rem;
  font-variant: small-caps;

  @media (min-width: 576px) {
    font-size: 4rem;
  }
  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

const Subtitle = styled.h2`
  text-align: right;
  font-size: 1.5rem;
  padding: 0;
  text-transform: lowercase;
`;

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <HomeLayout>
        <Wrapper>
          <Title>Lorem Ipsum</Title>
          <Subtitle>Photography</Subtitle>
        </Wrapper>
      </HomeLayout>
    </>
  );
};

export default IndexPage;
