import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import { IoCloseSharp } from 'react-icons/io5';

import {
  NavItem,
  NavLink,
  ClickAwayListener,
  NavDrawerWrapper,
  NavClose,
  List,
} from './Nav.styles';
import { useNavigationQuery } from '../../hooks/useNavigationQuery';

const NavDrawer = ({ open, closeNav }) => {
  const navData = useNavigationQuery();
  const links = get(navData, 'allWpMenu.edges[0].node.menuItems.nodes', []);

  if (!links || !links.length) return null;

  const listContent = links.map(({ id, label, path }) => (
    <NavItem key={id}>
      <NavLink to={path} tabIndex={open ? '0' : '-1'}>
        {label}
      </NavLink>
    </NavItem>
  ));

  return (
    <>
      <ClickAwayListener open={open} onClick={closeNav} />
      <NavDrawerWrapper open={open} aria-hidden={!open}>
        <NavClose
          tabIndex={open ? '0' : '-1'}
          onClick={closeNav}
          aria-label="close menu"
        >
          <IoCloseSharp aria-hidden />
        </NavClose>
        <List>{listContent}</List>
      </NavDrawerWrapper>
    </>
  );
};

NavDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  closeNav: PropTypes.func.isRequired,
};

NavDrawer.defaultProps = {
  open: false,
};

export default NavDrawer;
