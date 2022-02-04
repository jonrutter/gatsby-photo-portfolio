import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Nav from './Nav';

const Wrapper = styled.header`
  padding: 1rem 0rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HomeLink = styled(Link)`
  display: inline-block;
  font-size: 3rem;
  letter-spacing: 0.1rem;
  font-variant: small-caps;
  position: relative;
  padding: 0.5rem 0;
  overflow: hidden;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background-color: black;
    transition: transform 0.2s;
    transform: translate3d(-100%, 0, 0);
  }

  &:hover,
  &:focus {
    outline: none;

    &::after {
      transform: translate3d(0, 0, 0);
    }
  }

  @media (min-width: 576px) {
    font-size: 4rem;
  }

  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <HomeLink to="/">Lorem Ipsum </HomeLink>
      <Nav />
    </Wrapper>
  );
};

export default Header;
