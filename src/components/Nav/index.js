import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { IoMenuSharp } from 'react-icons/io5';

import NavDrawer from './NavDrawer';
import { Wrapper, NavOpen } from './Nav.styles';

/**
 * Navigation controls. Manages state to open and close the nav. Renders the nav drawer to display the nav UI.
 *
 * @param props.home - (Optional), whether the current page is the home page. Only used to change the styling of the open button, to improve accessibility.
 */
const Nav = ({ home }) => {
  const [open, setOpen] = useState(false);
  const toggleNav = () => setOpen((open) => !open);
  return (
    <>
      <Wrapper home={home}>
        <NavOpen
          onClick={toggleNav}
          aria-label="open menu"
          home={home}
          tabIndex={open ? '-1' : '0'}
        >
          <IoMenuSharp aria-hidden />
        </NavOpen>
      </Wrapper>
      <NavDrawer open={open} closeNav={toggleNav} />
    </>
  );
};

Nav.propTypes = {
  home: PropTypes.bool,
};

Nav.defaultProps = {
  home: false,
};

export default Nav;
