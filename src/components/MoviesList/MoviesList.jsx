import { MovieListItemLink, MoviesListStyled } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ trendingMovies }) => {
  const location = useLocation();
  return (
    <MoviesListStyled>
      {trendingMovies &&
        trendingMovies.map(movie => (
          <li key={movie.id}>
            <MovieListItemLink
              state={{ from: location }}
              to={`/movies/${movie.id}`}
            >
              {movie.title}
            </MovieListItemLink>
          </li>
        ))}
    </MoviesListStyled>
  );
};

export default MoviesList;
