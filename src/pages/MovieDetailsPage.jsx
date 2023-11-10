import React, { useState, useEffect } from 'react';
import { fetchMovieDetails } from 'components/Api/Api';
import { Loader } from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { notifyNoResultFound } from 'components/Error/Error';
import { Movie } from 'components/MovieDetails/MovieDetails';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchTodayMovies = async () => {
      try {
        setLoading(true);
        const { data } = await fetchMovieDetails(movieId);

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
      {movieDetails && <Movie movieDetails={movieDetails} />}

      {loading && <Loader />}
      <ToastContainer />
    </div>
  );
};

export default MovieDetailsPage;
