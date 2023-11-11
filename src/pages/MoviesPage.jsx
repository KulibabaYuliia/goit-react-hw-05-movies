import React, { useState, useEffect } from 'react';
import { fetchSearchedMovies } from 'components/Api/Api';
import { Loader } from 'components/Loader/Loader';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import { notifyNoResultFound } from 'components/Error/Error';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';

const MoviesPage = () => {
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [loading, setLoading] = useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetchMoviesByName = async () => {
      try {
        if (!query) {
          return;
        }
        setLoading(true);
        const { data } = await fetchSearchedMovies(query);

        if (data.results.length === 0) {
          throw new Error('No results found');
        }

        console.log(data.results);
        setSearchedMovies(data.results);
      } catch (error) {
        setSearchedMovies(null);
        notifyNoResultFound(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesByName();
  }, [query]);

  return (
    <div>
      <Searchbar searchedMovies={searchedMovies} />
      <MoviesList trendingMovies={searchedMovies} />
      {loading && <Loader />}
      <ToastContainer />
    </div>
  );
};

export default MoviesPage;
