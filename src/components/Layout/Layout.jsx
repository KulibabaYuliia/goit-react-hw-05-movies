import {
  StyledLink,
  StyledNav,
  StyledHeader,
  ContainerStyled,
} from './Layout.styled';

export const Layout = ({ children }) => {
  return (
    <div>
      <StyledHeader>
        <StyledNav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </StyledNav>
      </StyledHeader>
      <main>
        <ContainerStyled>{children}</ContainerStyled>
      </main>
    </div>
  );
};
