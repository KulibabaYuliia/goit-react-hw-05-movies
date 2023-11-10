// import { StyledGallery } from './TrendingFilmsList.styled';
import { Link } from 'react-router-dom';

const MoviesList = ({ trendingMovies }) => {
  return (
    <ol>
      {trendingMovies &&
        trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
    </ol>
  );
};

export default MoviesList;