import axios from 'axios';

const KEY = 'f254cc864df015fcbf82561d518eee0b';

export async function fetchTrendingMovies() {
  const res = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${KEY}`
  );
  return res;
}

export async function fetchMovieDetails(movieId) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${KEY}`
  );
  return res;
}

// https://api.themoviedb.org/3/movie/111
