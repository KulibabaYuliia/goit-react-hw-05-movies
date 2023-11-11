import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const GoBackStyled = styled(Link)`
  display: inline-block;
  min-width: 100px;
  border-radius: 4px;
  border: solid 1px rgba(138, 131, 131, 0.75);
  box-shadow: 0px 7px 8px -1px rgba(138, 131, 131, 0.75);
  padding: 4px;
  text-decoration: none;
  color: black;
  margin-bottom: 20px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: orange;
  }
`;

export const MovieWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  img {
    border-radius: 4px;
  }
`;

export const MovieDetailsWrapper = styled.div`
  display: flex;
  gap: 10px;
  max-width: 500px;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const AdditionalInfoLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &.active {
    color: orange;
  }
`;
