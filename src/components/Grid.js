import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  coplumn-count: 1;
  column-gap: 2rem;
  padding: 1rem 0;
  @media (min-width: 768px) {
    column-count: 2;
  }
  @media (min-width: 1200px) {
    column-count: 3;
  }
`;

const Item = styled.div`
  display: inline-block;
  width: 100%;
  margin-bottom: 2rem;
  padding; 0.5rem;
`;

/**
 * Creates a multi-column masonry grid layout.
 *
 * This component defaults to creating a grid container. If you pass a boolean 'item' prop, the component will instead create a grid item. You can also optionally pass a 'container' boolean param to explicitly create a container.
 *
 * @param props.container - (Optional) boolean, whether the component should be a Grid container.
 * @param props.item - (Optional) boolean, whether the component should be a Grid item.
 * @param props.children - The grid content.
 */
const Grid = ({ container, item, children }) => {
  if (item) return <Item>{children}</Item>;
  else return <Wrapper>{children}</Wrapper>;
};

Grid.defaultProps = {
  container: false,
  item: false,
};

Grid.propTypes = {
  container: PropTypes.bool,
  item: PropTypes.bool,
  children: PropTypes.any,
};

export default Grid;
