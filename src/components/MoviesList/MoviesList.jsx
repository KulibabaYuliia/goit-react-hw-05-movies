// import { StyledGallery } from './TrendingFilmsList.styled';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ trendingMovies }) => {
  const location = useLocation();
  return (
    <ol>
      {trendingMovies &&
        trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link state={{ from: location }} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
    </ol>
  );
};

export default MoviesList;
