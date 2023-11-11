import React, { useState, useEffect } from 'react';
import { useParams, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { fetchMovieDetails } from 'components/Api/Api';

import { notifyNoResultFound } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import { Movie } from 'components/MovieDetails/MovieDetails';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

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
      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>

      {loading && <Loader />}
      <ToastContainer />
    </div>
  );
};

export default MovieDetailsPage;
