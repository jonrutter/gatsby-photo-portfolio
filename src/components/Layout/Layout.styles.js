import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  max-width: 100vw;
`;

export const Content = styled.div`
  max-width: 1200px;
  padding: 0rem 1rem;
  margin: auto;
  position: relative;

  @media (min-width: 576px) {
    padding: 0rem 3rem;
  }
`;
