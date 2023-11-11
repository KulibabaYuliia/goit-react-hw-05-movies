import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'components/Api/Api';
import { Loader } from 'components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import { notifyNoResultFound } from 'components/Error/Error';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchTodayMovies = async () => {
      try {
        setLoading(true);
        const { data } = await fetchTrendingMovies();

        if (data.results.length === 0) {
          throw new Error('No results found');
        }

        setTrendingMovies(data.results);
      } catch (error) {
        setTrendingMovies(null);
        notifyNoResultFound(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodayMovies();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>

      <MoviesList trendingMovies={trendingMovies} />

      {loading && <Loader />}

      <ToastContainer />
    </div>
  );
};

export default Home;
