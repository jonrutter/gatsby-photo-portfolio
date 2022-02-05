import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 100%;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 1rem;
    line-height: 1.5;
    font-family: Montserrat, sans-serif;
    overflow-x: hidden;
  }

  button {
    font-size: 100%;
    font-family: inherit;
    line-height: inherit;
    cursor: pointer;
    border: none;
    margin: 0;
    text-transform: none;
    -webkit-appearance: none;
  }

  a,
  button {
    background-color: transparent;
  }

  a {
    color: inherit;
    font-size: inherit;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }

  a:hover {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    font-size: 1.5rem;
    padding: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  img {
    user-select: none;
  }

  address {
    font-style: normal;
  }
`;
