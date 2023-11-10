import { StyledLink, StyledNav, StyledHeader } from './Layout.styled';

export const Layout = ({ children }) => {
  return (
    <div>
      <StyledHeader>
        <StyledNav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </StyledNav>
      </StyledHeader>
      <main>{children}</main>
    </div>
  );
};
