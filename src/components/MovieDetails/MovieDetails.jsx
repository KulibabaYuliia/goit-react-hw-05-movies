import { NavLink, useLocation, Link } from 'react-router-dom';
import { MovieWrapper } from './MovieDetails.styled';
import defaultPoster from 'components/icons/defaultPoster.png';
import { useRef } from 'react';

export const Movie = ({ movieDetails }) => {
  const moviePosterUrl = 'https://image.tmdb.org/t/p/w500/';
  const { title, release_date, overview, vote_average, poster_path, genres } =
    movieDetails || {};
  const imageSrc = poster_path ? moviePosterUrl + poster_path : defaultPoster;

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  return (
    <div>
      <Link to={backLinkRef.current}>Go back</Link>
      <MovieWrapper>
        <img src={imageSrc} alt={title} width="300" />
        <div>
          <h2>
            {title} ({release_date.slice(0, 4)})
          </h2>
          <p>User Score: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres.map(genre => (
              <li key={genre.name}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </MovieWrapper>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
