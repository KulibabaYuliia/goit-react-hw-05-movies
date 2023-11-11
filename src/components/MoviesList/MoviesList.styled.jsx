import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MoviesListStyled = styled.ol``;

export const MovieListItemLink = styled(Link)`
  text-decoration: none;
  color: black;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: orange;
  }
`;
