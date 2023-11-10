import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export const StyledHeader = styled.header`
  padding: 20px;
  box-shadow: 0px 7px 8px -1px rgba(138, 131, 131, 0.75);
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 16px;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: orange;
  }
`;
