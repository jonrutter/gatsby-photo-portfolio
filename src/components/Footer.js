import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  border-top: 1px solid #636363;
  padding: 3rem 0;
  font-size: 1rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Col = styled.div`
  flex: 1;

  @media (min-width: 768px) {
    &:first-child {
      margin-right: 2rem;
    }
  }
`;

const StyledLink = styled.a`
  display: inline-block;
  position: relative;
  color: #636363;

  &::before {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    max-width: 0px;
    color: #000;
    display: inline-block;
    white-space: nowrap;
    border-bottom: 1px solid #000;
    transition: max-width 0.3s;
  }

  &:hover,
  &:focus {
    outline: none;
    &::before {
      max-width: 100%;
    }
  }
`;

const Link = ({ href, children }) => (
  <StyledLink href={href} rel="noreferrer" target="_blank" data-text={children}>
    {children}
  </StyledLink>
);

const EmailLink = () => (
  <StyledLink
    href="mailto:contact@jonrutter.com"
    data-text="contact@jonrutter.com"
  >
    contact@jonrutter.com
  </StyledLink>
);

const Footer = () => (
  <Wrapper>
    <Col>
      <p>
        This demo photography portfolio website was designed and coded by{' '}
        <Link href="https://github.com/jonrutter">Jon Rutter</Link>, Copyright
        2021-
        {new Date().getFullYear()}.
      </p>
      <p>
        All photos are from{' '}
        <Link href="https://www.pexels.com/license/">pexels.com</Link>, and are
        the copyright of their respective owners.
      </p>
    </Col>
    <Col>
      <p>
        Do you need a website? Get in touch with me at <EmailLink />.
      </p>
      <p>
        Check out my other projects at{' '}
        <Link href="https://www.jonrutter.com">my portfolio website</Link>.
      </p>
    </Col>
  </Wrapper>
);

export default Footer;
