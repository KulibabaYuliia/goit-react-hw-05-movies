import React, { useState, useEffect } from 'react';
import { useParams, Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews,
} from 'components/Api/Api';

import { notifyNoResultFound } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import { Movie } from 'components/MovieDetails/MovieDetails';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const [movieCast, setMovieCast] = useState(null);
  const [movieReviews, setMovieReviews] = useState(null);
  const [loading, setLoading] = useState(null);

  const location = useLocation();
  console.log(location);

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

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const { data } = await fetchMovieCast(movieId);

        setMovieCast(data.cast);
      } catch (error) {
        setMovieCast(null);
        notifyNoResultFound(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  useEffect(() => {
    const fetchRevies = async () => {
      try {
        setLoading(true);
        const { data } = await fetchMovieReviews(movieId);

        setMovieReviews(data.results);
      } catch (error) {
        setMovieReviews(null);
        notifyNoResultFound(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRevies();
  }, [movieId]);

  return (
    <div>
      {movieDetails && <Movie movieDetails={movieDetails} />}
      <Routes>
        <Route path="cast" element={<Cast movieCast={movieCast} />} />
        <Route
          path="reviews"
          element={<Reviews movieReviews={movieReviews} />}
        />
      </Routes>

      {loading && <Loader />}
      <ToastContainer />
    </div>
  );
};

export default MovieDetailsPage;
