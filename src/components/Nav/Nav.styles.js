import styled from 'styled-components';
import { Link } from 'gatsby';

export const Wrapper = styled.div`
  position: ${({ home }) => (home ? 'fixed' : 'relative')};
  top: 0;
  right: 0;
  ${'' /* padding: 8rem 1rem 2rem; */}
`;

export const NavToggle = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  color: #000;
  font-size: 1.5rem;
  padding: 0.75rem;
  ${'' /* margin: 1rem; */}
  transition: all 0.2s;
  border: 1px solid transparent;

  &:focus,
  &:hover {
    outline: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    transition: all 0.2s;
    transform: scale(0);
  }

  & > svg {
    position: relative;
    display: block;
  }
`;

export const NavOpen = styled(NavToggle)`
  position: ${({ home }) => (home ? 'absolute' : 'relative')};
  border-color: ${({ home }) => (home ? '#fff' : '#000')};
  color: ${({ home }) => (home ? '#fff' : '#000')};
  margin: ${({ home }) => (home ? '1rem 1rem 0 0' : '0')};

  & > svg {
    z-index: 3;
  }

  &:focus,
  &:hover {
    outline: none;
    color: ${({ home }) => (home ? '#000' : '#fff')};

    &::before {
      background-color: ${({ home }) =>
        home ? 'rgba(255, 255, 255, 0.7)' : '#000'};
      transform: scale(1);
      z-index: 2;
    }
  }
`;

export const NavClose = styled(NavToggle)`
  border-color: #000;
  color: #000;
  margin-right: 1rem;
  margin-top: 1rem;

  & > svg {
    z-index: 12;
  }

  &:focus,
  &:hover {
    outline: none;
    color: #fff;

    &::before {
      background-color: #000;
      transform: scale(1);
      z-index: 11;
    }
  }
`;

export const ClickAwayListener = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  height: 100vh;
  width: 100vw;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);

  display: ${({ open }) => (open ? 'block' : 'none')};
`;

export const NavDrawerWrapper = styled.nav`
  z-index: 11;
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  padding: 8rem 1rem 2rem;
  height: 100%;
  width: 90%;
  max-width: 576px;
  background-color: white;
  color: black;
  font-size: 1.25rem;
  overflow-y: auto;
  transition: transform 0.2s ease-in-out;
  transform: translateX(${({ open }) => (open ? '0%' : '100%')});

  @media (min-width: 576px) {
    width: 50%;
    font-size: 1.5rem;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const NavItem = styled.li`
  margin: 1rem;
  text-align: right;
`;

export const NavLink = styled(Link)`
  display: block;
  position: relative;
  padding: 0.5rem 0;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background-color: black;
    transition: transform 0.2s;
    transform: translate3d(100%, 0, 0);
  }

  &:hover,
  &:focus {
    outline: none;

    &::after {
      transform: translate3d(0, 0, 0);
    }
  }
`;
