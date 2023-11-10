import React, { useState, useEffect } from 'react';
import { fetchMovieDetails } from 'components/Api/Api';
import { Loader } from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { notifyNoResultFound } from 'components/Error/Error';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchTodayMovies = async () => {
      try {
        setLoading(true);
        const { data } = await fetchMovieDetails(movieId);

        // if (data.results === 0) {
        //   throw new Error('No results found');
        // }

        setMovieDetails(data);
        console.log(data);
      } catch (error) {
        setMovieDetails(null);
        notifyNoResultFound(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodayMovies();
  }, [movieId]);

  return (
    <div>
      {/* <h2>Trending today</h2>
      <ul>
        {trendingMovies &&
          trendingMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul> */}
      {loading && <Loader />}
      <ToastContainer />
    </div>
  );
};

export default MovieDetailsPage;
