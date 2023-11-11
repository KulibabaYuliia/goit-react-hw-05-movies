import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useParams, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { fetchMovieDetails } from 'components/Api/Api';

import { notifyNoResultFound } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import { Movie } from 'components/MovieDetails/MovieDetails';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

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
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>

      {loading && <Loader />}
      <ToastContainer />
    </div>
  );
};

export default MovieDetailsPage;
